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

export const CaretLeftIcon: React.FC<Props> = props => {
  return (
    <svg
      width={props.width || 28}
      height={props.height || 28}
      viewBox="0 0 8 13"
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
        d="M7.70502 2.11499L3.12502 6.70499L7.70502 11.295L6.29502 12.705L0.295017 6.70499L6.29502 0.704987L7.70502 2.11499Z"
        fill={props.color || '#656363'}
      />
    </svg>
  )
}
