import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    fromEmail: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'anffernando01@gmail.com',
          subject: `${formData.subject} - Mensaje de ${formData.name}`,
          text: `De: ${formData.name} (${formData.fromEmail}) ${formData.message}`
        })
      });

      if (response.ok) {
        alert("Mensaje enviado correctamente");
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Hubo un error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <form className="form__contact" onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Correo electrónico:</label>
      <input
        type="email"
        name="fromEmail"
        value={formData.fromEmail}
        onChange={handleChange}
        required
      />

      <label>Asunto:</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label>Mensaje:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button className="button__form" type="submit">Enviar</button>
    </form>
  );
}

export default Contact;