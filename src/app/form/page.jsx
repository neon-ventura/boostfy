'use client'
import Swal from "sweetalert2";
import { validateCNPJ } from "@/utils/cnpjValidator";
import { useEffect, useState } from "react";
import styles from './Form.module.css';
import Nav from "@/components/Nav/Nav";
import Image from "next/image";

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

    if (companyName.length > 100 || companyName === '') {
      alert("Error no nome da empresa")
      return
    }

    if (!validateCNPJ(cnpj)) {
      alert("CNPJ falso!!!")
      return
    }

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
      <h1 className={styles.title}>Vamos Impulsionar Seu Negócio Juntos</h1>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.subtitle}>Informações da empresa</h3>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company_name">
              Nome da empresa:
              <input
                maxLength={50}
                placeholder="Ex: Google"
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
                maxLength={18}
                placeholder="00.000.000/0000-00"
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
              Setor/Área de atuação:
              <select
                className={styles.input}
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
              Número de Funcionários:
              <input
                maxLength={7}
                placeholder="Ex: 100"
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
        <Image className={styles.img} src={'/lottie-form.webp'} height={500} width={500} />
      </div>
    </>
  )
}
