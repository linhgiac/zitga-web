import React, {useState} from "react";
import  "./contact.css"
import PageStyles from "../pages.module.css"
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';

import {ReactComponent as Separator} from '../../assets/contact-separator.svg'

const Contact = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <ContactTitleImage/>
            </div>
            <div className = {PageStyles.content}>
               <ContactContent/>
            </div>
        </div>
    )
}
const ContactTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="contact-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Contact</div>
                </div>
            </div> 
            
        </div>
        

    )
    
    }
const SubmitForm = () => {
    const [value, setValue] = useState();
    const [isFillIn, setIsFillIn] = useState(null);
    
    const handleSubmit = (event) => {
      if(value){
        return (
            setIsFillIn(true)
        )
      }  
      if (!isFillIn){
          console.log('Please fill in information');
      }
      event.preventDefault();
    }

      return (
        <form onSubmit={handleSubmit}>
          <label>
        <textarea onChange={() => setValue(value)} placeholder= "Your Name" className = "content-form-input"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }

const ContactContent = () =>{
    return (
        <div className="content-inner">
                <Row gutter={16}>
                    <Col className="gutter-row" span = {12}>
                        <div className = "content-col1">
                            <div className = "content-sub-title">
                                Liên hệ với <br/>
                                Zitga Studios
                            </div>
                            <div className = "content-separator">
                                <Separator/>
                            </div>
                            <div className = "content-text">
                                <p>Trụ sở chính: P704 – 706, tòa nhà Toyota Thanh Xuân, số 315 Trường Chinh, Thanh Xuân, Hà Nội.</p>
                                <p>Văn phòng TP Hồ Chí Minh: Tầng 3 Tòa nhà Blue Diamond (BD), Y1 Hồng Lĩnh, Cư xá Bắc Hải, phường 15, quận 10, TP. Hồ Chí Minh</p>
                                <p>Số điện thoại: 034 639 6067 Email: hr@zitga.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span = {12}>
                        <div className="content-col2">
                            <div className="content-col2-submit-form">
                                <SubmitForm/>
                            </div>
                        </div>
                    </Col>
                </Row>
            <div>
                
                
            </div>
            
                
            
        </div>
    )
}




export default Contact;