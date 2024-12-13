const Blog = ()=>{
    return<>
    <section className="bg-white w-full pt-[75px] pb-[60px] gap-[60px]">
                <div className="flex items-center justify-center mb-10">
                    <div className="text-center">
                        <h1 className="font-bold text-[50px] text-black">News and Blog</h1>
                        <p className="font-normal text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, iure.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between w-full gap-6 p-8">
                    <div className="w-1/2 gap-5 cursor-default">
                        <img
                            src="/public/about-us/Blogging.jpg"
                            alt="blog"
                            className="rounded-2xl blur-sm transition duration-300 ease-in-out hover:blur-none"
                        />
                            <p className="font-normal text-sm mt-4">30 March 2024</p>
                            <p className="font-semibold text-2xl mt-2 p-2">
                                How to avoid the top six most common job interview mistakes.
                            </p>
                            <a
                                href="https://www.theguardian.com/careers/careers-blog/2015/may/28/how-to-avoid-the-top-five-most-common-job-interview-mistakes"
                                className="text-[#309689] font-semibold text-base"
                            >
                                Read more...
                            </a>
                    </div>

                    <div className="w-1/2 gap-5 cursor-default">
                        <img
                            src="/public/about-us/Employee-Morale.png"
                            alt="blog"
                            className="rounded-2xl blur-sm transition duration-300 ease-in-out hover:blur-none"
                        />
                            <p className="font-normal text-sm mt-4">30 May 2024</p>
                            <p className="font-semibold text-2xl mt-2 p-2">
                                Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024.
                            </p>
                            <a
                                href="https://blog.catchafire.org/5-employee-engagement-strategies-to-boost-workplace-morale"
                                className="text-[#309689] font-semibold text-base"
                            >
                                Read more...
                            </a>
                    </div>
                </div>

            </section>
    </>
}
export default Blog 