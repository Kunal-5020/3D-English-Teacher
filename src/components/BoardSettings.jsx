import { teachers, useAITeacher } from "@/hooks/useAITeacher";

export const BoardSettings = () => {
  const teacher = useAITeacher((state) => state.teacher);
  const setTeacher = useAITeacher((state) => state.setTeacher);

  const Language = useAITeacher((state) => state.language); 
  const setLanguage = useAITeacher((state) => state.setLanguage);

  return (
    <>
      <div className="absolute left-0 bottom-full flex flex-row gap-10 mb-20">
        {teachers.map((sensei, idx) => (
          <div
            key={idx}
            className={`p-3 transition-colors duration-500 ${
              teacher === sensei ? "bg-white/100" : "bg-white/50"
            }`}
          >
            <div onClick={() => setTeacher(sensei)}>
              <img
                src={`/images/${sensei}.jpg`}
                alt={sensei}
                className="object-cover w-40 h-40"
              />
            </div>
            <h2 className="text-3xl font-bold mt-3 text-center text-black">
              {sensei}
            </h2>
          </div>
        ))}
      </div>

      

      <div className="absolute left-0 top-full flex flex-row gap-2 mt-20">
        <button
          className={`${
            Language === "English" ? "text-white bg-slate-900/80" : "text-white/45 bg-slate-700/60"
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setLanguage("English")}
        >
          English Accent
        </button>
        <button
          className={`${
            Language === "Hindi" ? "text-white bg-slate-900/80" : "text-white/45 bg-slate-700/60"
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setLanguage("Hindi")}
        >
          Hindi Accent
        </button>
      </div>
    </>
  );
};
