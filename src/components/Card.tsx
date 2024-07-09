const Card = (props) => {
    return(<div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="w-full text-center">
            <img src={props.imageSrc} className="w-full h-52 mx-auto object-cover cursor-pointer" />
            <div className="pt-6 pb-6 bg-white">
                <h3 className="text-xl font-semibold text-blue-800 cursor-pointer">{props.actorName}</h3>
                <p className="mb-8 text-gray-500 cursor-pointer">{props.actorNationality}</p>
                <div className="flex justify-center items-center">
                    <a target="_blank" href="https://www.facebook.com/aaronpaul" className="inline-flex items-center justify-center w-12 h-12 mx-2 bg-blue-50">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63494 17.7272V9.766H9.3583L9.76688 6.66243H6.63494V4.68126C6.63494 3.78299 6.88821 3.17083 8.20297 3.17083L9.87712 3.17015V0.394215C9.5876 0.357312 8.59378 0.272705 7.43708 0.272705C5.0217 0.272705 3.3681 1.71878 3.3681 4.37389V6.66243H0.636475V9.766H3.3681V17.7272H6.63494Z" fill="#3C74F9"></path></svg>
                    </a>
                    <a target="_blank" href="https://www.twitter.com/aaronpaul_8" className="inline-flex items-center justify-center w-12 h-12 mx-2 bg-blue-50">
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8184 2.14598C18.1358 2.44844 17.4034 2.65356 16.6339 2.74513C17.4196 2.27462 18.0211 1.52831 18.3061 0.641769C17.5691 1.0775 16.7556 1.39389 15.8887 1.56541C15.1946 0.82489 14.2072 0.363647 13.112 0.363647C11.011 0.363647 9.30746 2.06719 9.30746 4.16707C9.30746 4.46489 9.34107 4.75577 9.40598 5.03392C6.24459 4.87513 3.44128 3.3605 1.56507 1.05895C1.2371 1.61986 1.05053 2.27344 1.05053 2.9711C1.05053 4.29107 1.72268 5.45574 2.74249 6.13713C2.11901 6.11628 1.53262 5.94477 1.01925 5.65968V5.70719C1.01925 7.5498 2.3311 9.08762 4.07056 9.43762C3.75186 9.52337 3.4158 9.57089 3.06813 9.57089C2.82246 9.57089 2.58489 9.54656 2.35195 9.50019C2.83634 11.0125 4.24092 12.1123 5.90507 12.1424C4.60365 13.1623 2.96268 13.7683 1.18034 13.7683C0.873252 13.7683 0.570767 13.7498 0.272949 13.7162C1.9568 14.7974 3.95586 15.4279 6.1044 15.4279C13.1028 15.4279 16.9283 9.63116 16.9283 4.60398L16.9155 4.11147C17.663 3.57834 18.3096 2.90853 18.8184 2.14598Z" fill="#3C74F9"></path></svg>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/glassofwhiskey" className="inline-flex items-center justify-center w-12 h-12 mx-2 bg-blue-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.60045 2.18176H16.399C19.3871 2.18176 21.8181 4.61276 21.818 7.60069V16.3992C21.818 19.3871 19.3871 21.8181 16.399 21.8181H7.60045C4.61252 21.8181 2.18164 19.3872 2.18164 16.3992V7.60069C2.18164 4.61276 4.61252 2.18176 7.60045 2.18176ZM16.3991 20.0759C18.4265 20.0759 20.0759 18.4266 20.0759 16.3992H20.0758V7.60069C20.0758 5.57343 18.4263 3.924 16.399 3.924H7.60045C5.57319 3.924 3.92387 5.57343 3.92387 7.60069V16.3992C3.92387 18.4266 5.57319 20.076 7.60045 20.0759H16.3991ZM6.85696 12.0001C6.85696 9.16418 9.16401 6.85709 11.9998 6.85709C14.8356 6.85709 17.1427 9.16418 17.1427 12.0001C17.1427 14.8358 14.8356 17.1428 11.9998 17.1428C9.16401 17.1428 6.85696 14.8358 6.85696 12.0001ZM8.6278 11.9999C8.6278 13.8592 10.1406 15.3718 11.9998 15.3718C13.8591 15.3718 15.3718 13.8592 15.3718 11.9999C15.3718 10.1405 13.8592 8.62784 11.9998 8.62784C10.1404 8.62784 8.6278 10.1405 8.6278 11.9999Z" fill="#3C74F9"></path></svg>
                    </a>
                    <a target="_blank" href="https://www.imdb.com/name/nm0666739" className="inline-flex items-center justify-center w-12 h-12 mx-2 bg-blue-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3C74F9" className="h-5 w-5"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}
export default Card;