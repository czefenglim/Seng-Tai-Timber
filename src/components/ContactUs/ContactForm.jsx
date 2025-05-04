import React from 'react'
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                name,
                email,
                phone,
                subject,
                message,
                createdAt: Timestamp.fromDate(new Date()),
            });
            alert("Your message has been sent successfully!");
            console.log("Document written with ID: ", docRef.id);
            // Reset form fields
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        } catch (err) {
            console.error("Error adding document: ", e);
        }
    }

    const handleClear = () => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    }

  return (
    <div className='flex flex-col md:flex-row justify-center py-10 bg-[#EDD3B6] gap-20 md:gap-40'>
        <form className='px-10 md:px-5 flex flex-col justify-between items-start gap-3' onSubmit={handleSubmit}>
            <h1 className='text-[20px] md:text-[30px] lg:text-[40px] font-imbue text-[#A47551]'>Let's Connect</h1>
            <p className='text-[#A47551]'>SEND US YOUR INQUIRY NOW</p>
            <div className='flex justify-between items-center gap-3'>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name*'
                    required
                    className=' bg-[#FAF4EF] rounded-md px-4 py-2 w-[200px]'
                />
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email*'
                    className=' bg-[#FAF4EF] rounded-md px-4 py-2 w-[200px]'
                />
            </div>
            
            <div className='flex justify-between items-center gap-3'>
                <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder='Phone Number*'
                    className=' bg-[#FAF4EF] rounded-md px-4 py-2 w-[200px]'
                />
                <input
                    type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder='Subject*'
                    className=' bg-[#FAF4EF] rounded-md px-4 py-2 w-[200px]'
                />
            </div>

            <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder='Message*'
                className=' bg-[#FAF4EF] rounded-md px-4 py-2 w-full h-[300px]'
            />
            <div className='flex gap-5'>
                <button type="submit" className='bg-[#A47551] text-[#FAF4EF] rounded-md px-2 py-2 w-[200px] font-inknut'>
                    Submit
                </button>
                <button onClick={handleClear} className='bg-[#FAF4EF] text-[#A47551] rounded-md px-2 py-2 w-[200px] font-inknut'>
                    Clear
                </button>
            </div>
            
        </form>
        <div className='px-10 md:px-5 flex flex-col items-start gap-3'>
            <h1 className='text-[18px] md:text-[24px] lg:text-[32px] font-inknut  text-[#A47551]'>ADDRESS</h1>
            <h2 className='text-[15px] md:text-[18px] lg:text-[24px] font-inknut  text-[#A47551]'>Address</h2>
            <p className='text-[15px] md:text-[20px] text-[#A47551]'>
                Jalan Kim Kee, Taman Sakeh, 
                84000 Muar, Johor
            </p>
            <h2 className='text-[15px] md:text-[18px] lg:text-[24px] font-inknut  text-[#A47551]'>Opening Hours:</h2>
            <p className='text-[15px] md:text-[20px] text-[#A47551]'>
                Monday To Friday: 8am - 5pm <br/>
                Saturday: 8am - 1pm 
            </p>
            <h2 className='text-[15px] md:text-[18px] lg:text-[24px] font-inknut  text-[#A47551]'>Phone:</h2>
            <p className='text-[15px] md:text-[20px] text-[#A47551]'>
                +60123456789
            </p>
            <h2 className='text-[15px] md:text-[18px] lg:text-[24px] font-inknut  text-[#A47551]'>Email：</h2>
            <p className='text-[15px] md:text-[20px] text-[#A47551]'>
                czefenglim@gmail.com
            </p>
        </div>

    </div>
  )
}

export default ContactForm
