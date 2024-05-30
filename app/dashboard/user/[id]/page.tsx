


export default function Page({ params }: { params: { id: string } }) {
    return (
    <>    
    <h1 className="text-lg">ادیت این یوزر</h1>
    <h2>id {params.id}</h2>
    </>

    );
  }
  