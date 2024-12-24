'use client'
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import styles from './Form.module.css'; // Importando o arquivo CSS
import Nav from "@/components/Nav/Nav";

export default function Form() {
  const [companyName, setCompanyName] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [webSite, setWebSite] = useState("")
  const [sector, setSector] = useState("")
  const [employees, setEmployees] = useState("")

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
      priority: 2,
    });
  }, [companyName, cnpj, webSite, sector, employees]);


  const handleSubmit = async (e) => {
    e.preventDefault()

    Swal.fire({
      icon: "success",
      title: "Formulário enviado!",
      text: "Seu formulário foi enviado com successo.\n" + "Obrigado por nos escolher!"
    })

    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    })

    setCnpj("")
    setCompanyName("")
    setEmployees("")
    setSector("")
    setWebSite("")
  }

  return (
    <>
      <Nav />
      <div className={styles.content}>
        <h1 className={styles.title}>Vamos Impulsionar Seu Negócio Juntos</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.subtitle}>Informações da empresa</h3>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company_name">
              Nome da empresa:
              <input
                className={styles.input}
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
              CNPJ:
              <input
                className={styles.input}
                type="text"
                name="cnpj"
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="website">
              Web Site:
              <input
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
              Setor/Área de atuação:
              <input
                className={styles.input}
                type="text"
                name="sector"
                id="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="employees">
              Número de Funcionários:
              <input
                className={styles.input}
                type="number"
                name="employees"
                id="employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
              />
            </label>
          </div>
          <button className={styles.submitButton} type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}
