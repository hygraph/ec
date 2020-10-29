function Cart(props) {
  return (
    <svg
      className="ui-icon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fill="currentColor" d="M20 22a1 1 0 100-2 1 1 0 000 2z" />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="#221b38"
        d="M18 20a1 1 0 100-2 1 1 0 000 2z"
      />
      <path fill="currentColor" d="M12 22a1 1 0 100-2 1 1 0 000 2z" />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="#221b38"
        d="M10 20a1 1 0 100-2 1 1 0 000 2z"
      />
      <path fill="currentColor" d="M24 6l-2 11H10L8 6" />
      <path d="M22 4l-2 11H8L6 4" />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="#221b38"
        d="M22 4l-2 11H8L6 4M2 4h4M11 11h6M10 7h8"
      />
    </svg>
  );
}

export default Cart;
