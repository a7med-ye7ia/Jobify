import Card from "../Card/Card";
import { company } from '../../Pages/Jobs/companies'
const Companies = ()=>{
    const companyList = company.map((company, index) => {
        return <Card key={index} company={company} />;
    });
    return<>
        <section className="bg-[#EBF5F4] w-full pt-[60px] pb-[50px] gap-[60px]">
            <div className="flex items-center justify-center mb-10">
                <div className="text-center">
                <h1 className="font-bold text-[50px] text-black">Top Company</h1>
                <p className="font-normal text-[16px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</p>
                </div>
            </div>
            <div className="flex justify-between w-full gap-6 p-8">
                {companyList}
            </div>
        </section>
    </>
}
export default Companies