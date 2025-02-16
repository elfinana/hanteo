interface ListItemProps {
  image: string;
  title: string;
  description: string;
}

const ListItem = ({ image, title, description }: ListItemProps) => {
  return (
    <div className="flex items-center bg-white rounded-lg p-3  border border-1 mt-4">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-md object-cover mr-4"
      />
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ListItem;
