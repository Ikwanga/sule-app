import { useParams } from "react-router-dom";

export default function MoreDetails({ data, type }) {
  const { id } = useParams();
  const item = data[id];

  if (!item) return <h2>Item not found.</h2>;

  return (
    <div className="detail-container">
      <div className="details-content">
        {item.details}
      </div>
    </div>
  );
}
