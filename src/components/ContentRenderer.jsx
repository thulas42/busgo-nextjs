export default function ContentRenderer({ content }) {
  // If content is a string, render it directly
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }
  
  // If content is an object with icon and text
  if (typeof content === 'object' && content.icon && content.text) {
    return (
      <div className="flex items-start">
        <div className="icon mr-3">{content.icon}</div>
        <div className="text">{content.text}</div>
      </div>
    );
  }
  
  // If content is an array (like a list)
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc pl-5">
        {content.map((item, index) => (
          <li key={index}>
            <ContentRenderer content={item} />
          </li>
        ))}
      </ul>
    );
  }
  
  // Fallback for other types
  return <p>Content unavailable</p>;
} 