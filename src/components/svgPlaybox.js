import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  position: relative;
  background: blueviolet;
  height: 200px;
  width: 200px;
`
const SVG = styled.svg`
height: 200px;
width: 200px;
  path {
    stroke-width: 10px;
    stroke: #000;
    fill: black;
  }
`
const StaticSVG = () => {

    return (
        <Container>
            <SVG viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
                {/*
                    SVGs: x, y.
                    m: move to, so move the entire frame to some coordinate

                    The three drawing commands:
                    L: line to, which draws a line from current coordinate to a new position. (x,y)
                    H: horizontal line, only one parameter. (X)
                    V: vertical line, only one parameter (Y)
                    Z: returns the pointer to home, so this draws a path to home.
                    E.g. d="M 10 10 H 90 V 90 H 10 L 10 10 is a box 10 away from the borders in a 100x100 viewbox, so is:
                    d="M 10 10 H 90 V 90 H 10 Z
                    Using lowercase letters the movement is relative to the position, e.g. the following would yield the same result
                    d="M 10 10 h 80 v 80 h -80 Z"
                */}
                <path d="m 0 0 h 100" />
                <path d="m 0 32 h 100" />

                <path d="m 0 64 L 100 10" />
            </SVG>
        </Container>
    )
}

StaticSVG.propTypes = {}
export default StaticSVG
