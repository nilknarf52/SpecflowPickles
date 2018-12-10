﻿using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Tracing;

namespace PicklesSpecflow.Util
{
    public class Screen
    {
        public static string ScreenshotFilePath;
        public static void TakeScreenshot(IWebDriver driver)
        {
            string PathTargetScreenshot = ConfigurationManager.AppSettings["FilePathScreenshot"];
            try
            {
                string fileNameBase = string.Format("Evidencias_{0}_{1}_{2}",
                                                    FeatureContext.Current.FeatureInfo.Title.ToIdentifier(),
                                                    ScenarioContext.Current.ScenarioInfo.Title.ToIdentifier(),
                                                    DateTime.Now.ToString("ddMMyyyy_HHmmss"));

                var artifactDirectory = Path.Combine(PathTargetScreenshot, "Evidencias");

                Directory.CreateDirectory(artifactDirectory);

                string pageSource = driver.PageSource;
                string sourceFilePath = Path.Combine(artifactDirectory, fileNameBase + "_source.html");
                File.WriteAllText(sourceFilePath, pageSource, Encoding.UTF8);
                Console.WriteLine("Page source: {0}", new Uri(sourceFilePath));

                ITakesScreenshot takesScreenshot = driver as ITakesScreenshot;

                if (takesScreenshot != null)
                {
                    var screenshot = takesScreenshot.GetScreenshot();

                    string screenshotFilePath = Path.Combine(artifactDirectory, fileNameBase + "_screenshot.png");
                    ScreenshotFilePath = screenshotFilePath;
                    screenshot.SaveAsFile(screenshotFilePath, ScreenshotImageFormat.Png);

                    Console.WriteLine("Screenshot: {0}", new Uri(screenshotFilePath));
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro ao ao efetuar o screenshot: {0}", ex);
            }
        }
    }
}
