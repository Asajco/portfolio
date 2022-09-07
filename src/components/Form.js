import {React, useState} from 'react'
import emailjs from "@emailjs/browser"
import {useForm} from 'react-hook-form'
import styles from './Form.module.css'
import Heading from './reusable/Heading'

function Form() {
  
    const [showPopup, setShowPopup] = useState(false)
    const scrollUp = () =>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  
    const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
    } = useForm({
        defaultValues: {
            userName: "",
            userEmail: ""
        }
    })
   function handlePopup(){
    setShowPopup(true)
    scrollUp()
    setTimeout(()=>{
      setShowPopup(false)
    },4000)
   }
     
    
    const sendEmail = (formData) => {
        emailjs
          .send("service_8ifqz9h", "template_n81eybk", formData, "PplcVTx2tcLqBXnuv")
          .then(
            (result) => {
              console.log(result.text);
             
            },
            (error) => {
              console.log(error.text);
            }
          );
        reset();
      };
    
  return (
    <div id='contact'>
      
        <form onSubmit={handleSubmit(sendEmail)} className={styles["form-container"]}>
        <Heading heading="Interested in my work?"/>
        <label>Your dearest name</label>
         <input 
            {...register("userName", {required: "This field is required"})}
            placeholder="Your name..."
            name='userName'
            className={styles["form-input"]}
         />
         <p className={styles["error-message"]}>{errors.userName?.message}</p>
         <label>Your dearest email</label>
         <input
            {...register("userEmail", {required: "This field is required", 
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }})}
            placeholder="Email"
            className={styles["form-input"]}
        />
        <p className={styles["error-message"]}>{errors.userEmail?.message}</p>
        <label>Your message</label>
        <textarea {...register("message",
        {required:"If you want to text me, write me something"})} 
        name="message"
        placeholder='Write your message'
        className={styles["form-input"]}
        ></textarea>
        <p className={styles["error-message"]}>{errors.message?.message}</p>
         
         <button onClick={handlePopup} type="submit" className={styles["form-button"]}> Submit</button>
        </form>
        
        {showPopup && <div className={styles["form-popup-wrapper"]}>Thank you for your message!</div>}
        {/* <div className={styles["form-popup-wrapper"]}>Thank you for your message!</div> */}
    </div>
  )
}

export default Form