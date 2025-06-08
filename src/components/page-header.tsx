export default function PageHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="w-dvw h-[50vh] flex items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-7xl mb-4 md:mb-6">{title}</h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
