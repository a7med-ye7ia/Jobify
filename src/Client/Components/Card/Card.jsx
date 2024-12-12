const Card = ({key , company})=>{
    return<>
    <div className="m-auto w-1/4 bg-white h-[360px] rounded-lg transform transition-transform duration-300 hover:scale-110">
                    <div className="w-full h-auto my-7 p-1 text-center">
                        <div className="flex justify-center">
                        <img src={company.logo} alt="companyLogo" />
                        </div>
                        <p className="font-semibold text-[24px] cursor-default">{company.name}</p>
                    </div>
                    <div className="w-full mx-3 my-7 p-3 font-normal cursor-default">
                        <p>{company.description}</p>
                    </div>
                    <div className="w-1/2 bg-[#3096891A] rounded-md mx-auto">
                        <p className="p-1 cursor-default text-[#309689] text-center font-normal text-sm transform transition-transform duration-300 hover:scale-110">{company.numOfJobs} Open Jobs</p>
                    </div>
                </div>
    </>
}
export default Card 