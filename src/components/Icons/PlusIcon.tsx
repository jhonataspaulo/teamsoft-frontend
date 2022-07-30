import React from 'react'
import styled from 'styled-components'

type Props = {
  /**
   * Color value
   */
  color?: string
  /**
   * Width in pixels
   */
  width?: number
  /**
   * Height in pixels
   */
  height?: number
  /**
   * callback function
   */
  onClick?: () => void
}

export const PlusIcon: React.FC<Props> = props => {
  return (
    <Wrapper onClick={props.onClick}>
      <svg
        width={props.width || 14}
        height={props.height || 14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.875 6.125V0H6.125V6.125H0V7.875H6.125V14H7.875V7.875H14V6.125H7.875Z"
          fill={props.color || '#000000'}
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  border: none;
  background: transparent;
`
