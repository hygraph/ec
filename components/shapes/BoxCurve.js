function BoxCurve(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <style jsx>{`
        svg:hover path {
          transition: 0.2s;
          d: path("M0,0 C50,0 50,50 100,50 L100,100 L0,100z");
        }
      `}</style>
      <path d="M0,50 C50,50 50,0 100,0 L100,100 L0,100z" fill="currentColor" />
    </svg>
  );
}

export default BoxCurve;
