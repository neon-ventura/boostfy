const listId = "901107866463";
const authorization = "pk_158659484_QWV9ZJHAUFF7MI8O2TSJTA09CVHQ8VXV";
const url = `https://api.clickup.com/api/v2/list/${listId}/task`;
let taskId;

const CriarTarefas = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: authorization
    },
    body: JSON.stringify({ status: 'to do', priority: 2, notify_all: true, name: 'Sla fi' })
  };

  const response = await fetch(url, options);
  const json = await response.json();
  console.log("Tarefa criada:", json);
  return json.id; // Retorna o ID da tarefa
}

const CriarAttachment = async (taskId) => {

  const url = `https://api.clickup.com/api/v2/task/${taskId}/attachment`;

  const arquivo = new File(["Olá Mundo"], "anexo.txt", {
    type: 'text/plain'
  })

  const formData = new FormData()
  formData.append("attachment", arquivo)

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    },
    body: formData
  };

  const response = await fetch(url, options);
  const json = await response.json();
  console.log("Anexo criado:", json);
}


CriarTarefas().then((taskId) => CriarAttachment(taskId))