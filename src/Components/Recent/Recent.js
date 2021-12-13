import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { useCallback } from 'react'
import { Row, Col, Title, Wrapper, WrapTitle, WrapMedia, TitleRecent, MediaRecent } from "./Recent.Style"
import DataRecent from '../../Utils/DataRecent'

const Recent = ({x , y}) => {
    const datarecent = DataRecent
    const [activeIndex, setAktiveIndex] = useState(-1)

    const getDimensionObject = (node) => {
        const rect = node.getBoundingClientRect()

        return {
            width: rect.width,
            height: rect.height
        }
    }

    const useSize = () => {
        const [dimesion, setDimension] = useState({})
        const [node, setNode] = useState(null)

        const ref = useCallback(node => {
            setNode(node)
        }, [])

        useLayoutEffect(() => {
            if (node) {
                const measure = () => setDimension(getDimensionObject(node))
                measure()
            }
        }, [node])
        return [ref, dimesion]
    }

    const [ref , {width, height}] = useSize()

    return (
        <Row id="project">
            <Col>
                <Title>
                    <h3>My Recent Project</h3>
                </Title>
                <Wrapper>
                    <WrapTitle>
                        {datarecent.map(({ title }, index) => (
                            <TitleRecent
                                onMouseEnter={() => setAktiveIndex(index)}
                                onMouseLeave={() => setAktiveIndex(-1)}>
                                <h1>{title}</h1>
                            </TitleRecent>
                        ))}
                    </WrapTitle>
                    <WrapMedia>
                        {datarecent.map(({ media }, index) => {
                            const isActive = index === activeIndex
                            const active = isActive
                            const xPost = isActive ? x : 0
                            const yPost = isActive ? y : 0
                            return <MediaRecent>
                                <img 
                                className={active && "is-active"} 
                                src={media}
                                ref={ref}
                                style={{
                                    transform: `translate(${xPost - width/2 }px, ${yPost - height/2}px)`,
                                }}/>
                            </MediaRecent>
                        })}
                    </WrapMedia>
                </Wrapper>
            </Col>
        </Row>
    )
}

export default Recent
