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
}

export const CaretDownIcon: React.FC<Props> = props => {
  return (
    <svg
      width={props.width || 28}
      height={props.height || 28}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.41 0.294983L6 4.87498L10.59 0.294983L12 1.70498L6 7.70498L0 1.70498L1.41 0.294983Z"
        fill={props.color || '#000000'}
      />
    </svg>
  )
}
