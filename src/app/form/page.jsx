'use client'
import Swal from "sweetalert2";
import { validateCNPJ } from "@/utils/cnpjValidator";
import { useState, useEffect } from "react";
import styles from './Form.module.css';
import Nav from "@/components/Nav/Nav";
import Image from "next/image";

export default function Form() {
  const [companyName, setCompanyName] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [webSite, setWebSite] = useState("")
  const [sector, setSector] = useState("")
  const [employees, setEmployees] = useState("")
  const [file, setFile] = useState("")

  const [companyError, setCompanyError] = useState(false)
  const [cnpjError, setCnpjError] = useState(false)
  const [sectorError, setSectorError] = useState(false)
  const [employeesError, setEmployeesError] = useState(false)

  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    status: "",
    priority: ""
  })

  useEffect(() => {
    setTaskData({
      name: companyName,
      description: `Company Name: ${companyName}\n CNPJ: ${cnpj}\n Web Site: ${webSite}\n Sector: ${sector}\n Employees: ${employees}`,
      status: "to do",
      priority: 2
    });
  }, [companyName, cnpj, webSite, sector, employees]);

  const handleCnpjChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    setCnpj(value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyName === '') {
      setCompanyError(true);
      return;
    } else {
      setCompanyError(false);
    }

    if (!validateCNPJ(cnpj)) {
      setCnpjError(true);
      return;
    } else {
      setCnpjError(false);
    }

    if (sector === '') {
      setSectorError(true);
      return;
    } else {
      setSectorError(false);
    }

    if (employees === '' || employees == 0) {
      setEmployeesError(true);
      return;
    } else {
      setEmployeesError(false);
    }

    // Prepare the form data to send to the backend
    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("cnpj", cnpj);
    formData.append("webSite", webSite);
    formData.append("sector", sector);
    formData.append("employees", employees);
    if (file) formData.append("file", file);

    const response = await fetch('/api', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Formulário enviado!",
        text: "Seu formulário foi enviado com sucesso. Obrigado por nos escolher!"
      });
      // Clear form fields
      setCnpj("");
      setCompanyName("");
      setEmployees("");
      setSector("");
      setWebSite("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: `Houve um erro: ${result.message}`
      });
    }
  };


  return (
    <>
      <Nav />
      <h1 className={styles.title}>Vamos Impulsionar Seu Negócio Juntos</h1>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.subtitle}>Informações da empresa</h3>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company_name">
              Nome da empresa: {companyError ? (<span className={styles.span}>Preencha o campo</span>) : ""}
              <input
                maxLength={50}
                placeholder="Ex: Google"
                className={`${styles.input} ${companyError ? styles.error : ""}`}
                type="text"
                name="company_name"
                id="company_name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cnpj">
              CNPJ: {cnpjError ? (<span className={styles.span}>CNPJ inválido</span>) : ""}
              <input
                maxLength={18}
                value={cnpj}
                onChange={handleCnpjChange}
                placeholder="XX.XXX.XXX/XXXX-XX"
                className={`${styles.input} ${cnpjError ? styles.error : ""}`}
                type="text"
                name="cnpj"
                id="cnpj"
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="website">
              Web Site: (Opcional)
              <input
                maxLength={100}
                placeholder="Ex: google.com"
                className={styles.input}
                type="text"
                name="website"
                id="website"
                value={webSite}
                onChange={(e) => setWebSite(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="sector">
              Setor/Área de atuação: {sectorError ? (<span className={styles.span}>Selecione uma área</span>) : ""}
              <select
                className={`${styles.input} ${sectorError ? styles.error : ""}`}
                name="sector"
                id="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                <option value="" disabled>Selecione o setor</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="saude">Saúde</option>
                <option value="educacao">Educação</option>
                <option value="financas">Finanças</option>
                <option value="outros">Outros</option>
              </select>
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="employees">
              Número de Funcionários: {employeesError ? (<span className={styles.span}>Preencha o campo</span>) : ""}
              <input
                maxLength={7}
                placeholder="Ex: 100"
                className={`${styles.input} ${employeesError ? styles.error : ""}`}
                type="number"
                name="employees"
                id="employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="file">
              Arquivo:
              <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button className={styles.submitButton} type="submit">Enviar</button>
        </form>
        <Image priority className={styles.img} src={'/lottie-form.webp'} height={500} width={500} alt="lottie gif" />
      </div>
    </>
  )
}

