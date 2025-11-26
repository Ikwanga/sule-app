import { useParams } from "react-router-dom";

export default function MoreDetails({ data, type }) {
  const { id } = useParams();
  const item = data[id];

  if (!item) return <h2>Item not found.</h2>;

  return (
    <div className="detail-container">
      {/* Page title */}
      <h2>{type} Details</h2>

      {/* Item title (works for all types) */}
      <h3>
        {item.position ||
         item.title ||
         item.role ||
         item.code ||
         item.name}
      </h3>

      {/* Render the component that contains all detailed JSX */}
      <div className="details-content">
        {item.details}
      </div>
    </div>
  );
}
