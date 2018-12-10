using PicklesSpecflow.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicklesSpecflow.Hooks
{
    public class Query
    {
        public static void ExcluirConsolidado()
        {
            var rep = new SQLRepository<object>("delete from ans.tbSibResultadoConsolidadoProcessamento", "BD");
            var retorno = rep.Exec(new Dictionary<string, object>());
        }
    }
}
