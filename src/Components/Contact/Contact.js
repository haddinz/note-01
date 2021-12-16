import React from 'react'
import email from "../svg/email.svg"
import home from "../svg/home.svg"
import iphone from "../svg/iphone.svg"
import { Row, 
    ColHeader, 
    ColBody, 
    TextInput, 
    Input, 
    Button, 
    InputGroup, 
    InputForm, 
    ColGroup, 
    Address } from "./Contact.Style"

const Contact = () => {
    return (
        <Row id="contact">
            <ColHeader>
                <h3>Any Question</h3>
                <h2>Please Fell Free To Contact Me</h2>
            </ColHeader>
            <ColBody>
                <ColGroup>
                    <TextInput>
                        <Input>
                            <input type="text" required />
                            <label>First Name</label>
                        </Input>
                        <Input>
                            <input type="text" required />
                            <label>Last Name</label>
                        </Input>
                    </TextInput>
                    <TextInput>
                        <Input>
                            <input type="text" required />
                            <label>Email</label>
                        </Input>
                        <Input>
                            <input type="text" required />
                            <label>Phone</label>
                        </Input>
                    </TextInput>
                    <InputForm >
                        <textarea required></textarea>
                        <label>Your Message</label>
                    </InputForm>
                    <Button>
                        <input type="submit" value="submit"/>
                    </Button>
                </ColGroup>
                <InputGroup>
                    <Address>
                        <img src={iphone} alt="icon"/>
                        <label>+682 - 999 - 000</label>
                    </Address>
                    <Address>
                        <img src={home} alt="icon"/>
                        <label>Sriwijaya Selatan, Buton</label>
                    </Address>
                    <Address>
                        <img src={email} alt="icon"/>
                        <label>email@insinyur.com</label>
                    </Address>
                </InputGroup>
            </ColBody>
        </Row>
    )
}

export default Contact
