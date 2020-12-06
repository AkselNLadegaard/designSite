import React from 'react'
import { css } from '@emotion/react'


export const blue =  'hsla(198, 63%, 38%, 1)';
export const orange = 'hsla(45, 100%, 48%, 1)';
export const purple =  'hsla(349, 24%, 32%, 1)';
export const green =  'hsla(161, 66%, 38%, 1)';
export const red = 'hsla(6, 77%, 62%, 1)';
export const white = 'floralwhite';

export const borderRadius = '12px'

export const gap = '0.67em'
const breakpoints = [576, 768, 992, 1200]
export const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

export const maxWidth = '90em'