import { years } from "../variables_env"

export function YearButtons({ currentYear, setCurrentYear, handleScroll }: { currentYear: number, setCurrentYear: (year: number) => void, handleScroll: (direction: string) => void }) {


    return (
        <div className="box-year">
            {years.map(year => (
                <button
                    key={year}
                    className={`btn-years ${currentYear === year ? " active" : ""}`}
                    onClick={() => {
                        setCurrentYear(year)
                        handleScroll("top")
                    }}
                >
                    {year}
                </button>
            ))}
        </div>
    )
}