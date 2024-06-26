import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SideBar = ({onOptionClick}) => {
    const sidebar = [
        { title: "Dashboard", link: "/", image: <DashboardIcon /> },
        { title: "Companies", link: "/companylist", image: <BusinessIcon /> },
        { title: "Add Company", link: "/createcompany", image: <AddBusinessIcon /> },
        { title: "Tasks", link: "/tasks", image: <AssignmentIcon /> },

    ]

    const handleOptionClick = () => {
        if (onOptionClick) {
            onOptionClick();
        }
    };

    return (
        <div className='flex flex-col gap-3 p-2'>

            {sidebar.map((item, index) => (

                <a to={item.link} key={index}>

                    <div
                        className={`${item.link ? "bg-blue-200 text-blue-700" : ""}  rounded-lg p-3 w-[240px]  flex justify-start gap-5 `}
                        onClick={handleOptionClick}
                    >
                        <div className='pl-6' >{item.image}</div> <span>{item.title}</span>
                    </div>

                </a>


            ))
            }



        </div >
    )
}

