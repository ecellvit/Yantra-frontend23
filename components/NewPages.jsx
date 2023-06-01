"use client"

import "../styles/landing.css";
import { useRouter } from "next/navigation";

export default function NewPages() {

    const router = useRouter()

    return (
        <div className="flex items-center justify-center space-x-5 py-5">
            {/* <button
                onClick={(e) => {
                    router.push(`/manage/hack/timeline`);
                }}
                className="navigation_card_btn w-button"
                >
                View Timeline
            </button> */}
            {/* <button
                onClick={(e) => {
                    // router.push(`/manage/hack/tracks`);
                    var link = document.createElement('a');
                    link.href = "https://drive.google.com/file/d/1kpgzpDlPyuL8_ChURbL9EVQkgu55Wlkx/view?usp=share_link";
                    link.download = '';
                    link.click();
                    var link1 = document.createElement('a');
                    link1.href = "/https://drive.google.com/file/d/1CEVCygejzCA_B1NJ2t1tZZV5yyhLTSaC/view?usp=share_link";
                    link1.download = '';
                    link1.click();
                }}
                className="navigation_card_btn w-button"
            >
                View Tracks & Template
            </button> */}
            <a className="navigation_card_btn w-button"
                rel="noreferrer"
                target="_blank"
                // href="https://drive.google.com/file/d/1kpgzpDlPyuL8_ChURbL9EVQkgu55Wlkx/view?usp=share_link"
                // href="https://drive.google.com/file/d/1HjQBFqg1BvCwJrB8TLbidBEEbjMRxZhE/view"
                href="https://drive.google.com/file/d/1HjQBFqg1BvCwJrB8TLbidBEEbjMRxZhE/view"
            > View Tracks </a>
            <a className="navigation_card_btn w-button"
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1CEVCygejzCA_B1NJ2t1tZZV5yyhLTSaC/view"
            > View Template </a>
            <button
                onClick={(e) => {
                    router.push(`/manage/hack/upload`);
                }}
                className="navigation_card_btn w-button"
            >
                View Submission
            </button>
        </div>
    )
}