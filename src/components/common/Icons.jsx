const Icons = ({ icon, className, onClick, ref, ...props }) => {
    const iconList = {
        favorite: (
            <svg className={`group hover:fill-red-600 duration-300 ease-linear transition-all ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:stroke-red-600 max-sm:stroke-white duration-100 ease-linear transition-all" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        like: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        minusIcon: (
            <svg onClick={onClick} className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:stroke-white" d="M20 12H4" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        plusIcon: (
            <svg onClick={onClick} className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:stroke-white" d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        arrow: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1517_3071)">
                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_1517_3071">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        leftArrow: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_448_6523)">
                    <path d="M15.9993 10H7.0793L9.7793 6.62002C9.87436 6.51932 9.94746 6.39998 9.99398 6.26955C10.0405 6.13913 10.0594 6.00046 10.0496 5.86234C10.0397 5.72422 10.0012 5.58965 9.93666 5.46716C9.87207 5.34467 9.78275 5.23694 9.67435 5.15077C9.56595 5.06461 9.44083 5.00189 9.30693 4.96661C9.17303 4.93132 9.03326 4.92423 8.89647 4.94578C8.75968 4.96733 8.62886 5.01706 8.5123 5.0918C8.39573 5.16655 8.29596 5.2647 8.2193 5.38002L4.2193 10.38C4.0798 10.5566 4.00391 10.775 4.00391 11C4.00391 11.225 4.0798 11.4435 4.2193 11.62L8.2193 16.62C8.31243 16.7379 8.43091 16.8332 8.56595 16.899C8.70098 16.9648 8.8491 16.9993 8.9993 17C9.22487 16.9987 9.44337 16.9212 9.6193 16.78C9.82535 16.615 9.95781 16.3752 9.98778 16.113C10.0178 15.8507 9.94281 15.5872 9.7793 15.38L7.0793 12H15.9993C16.2645 12 16.5189 12.1054 16.7064 12.2929C16.8939 12.4804 16.9993 12.7348 16.9993 13V18C16.9993 18.2652 17.1047 18.5196 17.2922 18.7071C17.4797 18.8947 17.7341 19 17.9993 19C18.2645 19 18.5189 18.8947 18.7064 18.7071C18.8939 18.5196 18.9993 18.2652 18.9993 18V13C18.9993 12.2044 18.6832 11.4413 18.1206 10.8787C17.558 10.3161 16.795 10 15.9993 10Z" fill="#02428D" />
                </g>
                <defs>
                    <clipPath id="clip0_448_6523">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),

    };
    return icon && iconList[icon];
};
export default Icons;
