import { NextResponse } from 'next/server';

// 02.814.497/0002-98 CNPJ para exemplo se precisar

const listId = "901107866463"; // <--- coloque o id da sua lista do CLickUp aqui
const authorization = "pk_158659484_QWV9ZJHAUFF7MI8O2TSJTA09CVHQ8VXV"; // <--- coloque o token de acesso aqui
const url = `https://api.clickup.com/api/v2/list/${listId}/task`;

export async function POST(req) {
  try {
    const formData = await req.formData();

    const companyName = formData.get("companyName");
    const cnpj = formData.get("cnpj");
    const webSite = formData.get("webSite");
    const sector = formData.get("sector");
    const employees = formData.get("employees");
    const file = formData.get("file");

    const taskData = {
      name: companyName,
      description: `Company Name: ${companyName}\nCNPJ: ${cnpj}\nWeb Site: ${webSite}\nSector: ${sector}\nEmployees: ${employees}`,
      status: "to do",
      priority: 2,
      notify_all: true,
    };

    const taskOptions = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(taskData),
    };

    const taskResponse = await fetch(url, taskOptions);
    const task = await taskResponse.json();
    const taskId = task.id;

    if (file) {
      const formDataForFile = new FormData();
      formDataForFile.append('attachment', file);

      const attachOptions = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: authorization,
        },
        body: formDataForFile,
      };

      const attachUrl = `https://api.clickup.com/api/v2/task/${taskId}/attachment`;
      const attachResponse = await fetch(attachUrl, attachOptions);
      const attachJson = await attachResponse.json();

      console.log('Attachment Created:', attachJson);
    }

    return NextResponse.json({ message: 'Task and attachment created successfully', taskId }, { status: 200 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ message: 'Error creating task', error: error.message }, { status: 500 });
  }
}

