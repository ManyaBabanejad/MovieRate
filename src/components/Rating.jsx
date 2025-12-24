export default function Rating({ value, onRate }) {
  return (
    <div className="rating">
      <p>Your Rating:</p>

      {[1, 2, 3, 4, 5].map(num => (
        <span
          key={num}
          onClick={() => onRate(num)}
          style={{
            cursor: "pointer",
            fontSize: "26px",
            color: value >= num ? "gold" : "#ccc",
            marginRight: "5px"
          }}
        >
          ★
        </span>
      ))}

   
    </div>
  )
}
