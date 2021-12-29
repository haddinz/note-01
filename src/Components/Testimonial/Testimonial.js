import React, { useState } from 'react'
import Next from "../svg/Next.svg"
import {
    Row,
    Col,
    Button,
    Caraosel,
    Content,
    Identitas,
    Qoute,
    Slider,
    Shift,
    Indikator,
    Container,
    TitleHero
} from "./Testimonial.Style"
import { Box } from '../Header/Header.Style'
import Fade from "react-reveal/Fade"

const Testimonial = () => {
    const [step, setStep] = useState(1)

    const hanldeStep = () => {
        if (step === 4) {
            setStep(step - 3)
        } else {
            setStep(step + 1)
        }
    }

    return (
        <Row id="testimonial">
            <Box></Box>
            <Col>
                <h3>Testimonial</h3>
                <h2>What They Says</h2>
            </Col>
            <Caraosel>
                {step === 1 &&
                    <Container>
                        <Content>
                            <TitleHero>
                                <img src={process.env.PUBLIC_URL + "/images/asset/testimonial1.jpg"} alt="unsplash.com" />
                                <Identitas>
                                    <p>Jhon Doe</p>
                                    <p>Designer</p>
                                </Identitas>
                            </TitleHero>
                            <Qoute>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                </p>
                            </Qoute>
                        </Content>
                    </Container>}
                {step === 2 &&
                    <Container>
                        <Content>
                            <TitleHero>
                                <img src={process.env.PUBLIC_URL + "/images/asset/testimonial2.jpg"} alt="unsplash.com" />
                                <Identitas>
                                    <p>Luisanya</p>
                                    <p>Photographer</p>
                                </Identitas>
                            </TitleHero>
                            <Qoute>
                                <p>
                                    Lorem sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ipsum dolor sit amet, consetetur sadipscing elitr
                                </p>
                            </Qoute>
                        </Content>
                    </Container>}
                {step === 3 &&
                    <Container>
                        <Content>
                            <TitleHero>
                                <img src={process.env.PUBLIC_URL + "/images/asset/testimonial3.jpg"} alt="unsplash.com" />
                                <Identitas>
                                    <p>Jesica Rose</p>
                                    <p>Student</p>
                                </Identitas>
                            </TitleHero>
                            <Qoute>
                                <p>
                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            </Qoute>
                        </Content>
                    </Container>}
                {step === 4 &&
                    <Container>
                        <Content>
                            <TitleHero>
                                <img src={process.env.PUBLIC_URL + "/images/asset/testimonial4.jpg"} alt="unsplash.com" />
                                <Identitas>
                                    <p>Anie</p>
                                    <p>Designer</p>
                                </Identitas>
                            </TitleHero>
                            <Qoute>
                                <p>
                                    Over all though it was a great experience and  we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.
                                </p>
                            </Qoute>
                        </Content>

                    </Container>}
            </Caraosel>
            <Button onClick={hanldeStep}>
                <img src={Next} alt="next" />
            </Button>
            <Slider>
                <Shift>
                    {step === 1 &&
                        <>
                            <Indikator className="active"></Indikator>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                        </>
                    }
                    {step === 2 &&
                        <>
                            <Indikator></Indikator>
                            <Indikator className="active"></Indikator>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                        </>
                    }
                    {step === 3 &&
                        <>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                            <Indikator className="active"></Indikator>
                            <Indikator></Indikator>
                        </>
                    }
                    {step === 4 &&
                        <>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                            <Indikator></Indikator>
                            <Indikator className="active"></Indikator>
                        </>
                    }
                </Shift>
            </Slider>
        </Row>
    )
}

export default Testimonial
