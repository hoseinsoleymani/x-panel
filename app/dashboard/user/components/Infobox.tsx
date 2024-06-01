import Span from "@/app/dashboard/user/components/Span"

const Infobox = ({title , content}:any) => {
    return (
        <div className="used flex items-center"><p>{title}</p><Span>{content}</Span></div>
  );
};

export default Infobox;