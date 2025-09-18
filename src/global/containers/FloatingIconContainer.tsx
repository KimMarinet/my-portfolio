import React from "react"
import FloatingIcon from "../components/FloatingIcon";
import { GoMoveToTop } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

type FloatingType = {
    section: number
    goTop: () => void
}

const enum PageLink{
    MAINPAGE = '/',
}

const FloatingIconContainer = ({section, goTop}: FloatingType) => {
    const navigate = useNavigate();
    const goToPage = (page: PageLink) => {
        navigate(page)
    }

    return (
        <>
            <FloatingIcon bottom={30} onClick={goTop}>
                <GoMoveToTop style={{ width: '25px', height: 'auto' }} />
            </FloatingIcon>
            <FloatingIcon bottom={100} background="#4D96FF" onClick={() =>goToPage(PageLink.MAINPAGE)}>
                <CgProfile style={{ width: '25px', height: 'auto' }} />
            </FloatingIcon>
        </>
    )
}

export default React.memo(FloatingIconContainer)