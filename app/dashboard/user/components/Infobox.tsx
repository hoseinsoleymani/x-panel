import Span from '@/app/dashboard/user/components/Span';

const Infobox = ({ title, content }: any) => {
  return (
    <div className="flex items-center">
      <p className='text-sm md:text-lg'>{title}</p>
      <Span>{content}</Span>
    </div>
  );
};

export default Infobox;
