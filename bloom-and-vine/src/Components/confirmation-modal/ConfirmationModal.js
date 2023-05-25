import React from "react";
import "./ConfirmationModal.css"

export default function ConfirmationModal({pending, endState, children}) {
    return (
        (pending || endState) && 
        <div className="confirmation-modal-backdrop">
            <div className="confirmation-modal-container">
                { pending && 
                    <div className="loading-container">
                        <h3>Hold on while we receive your request.</h3>
                        <div className="loader"></div>
                    </div>
                }
                { ( endState === "confirmed") && 
                    children
                }
                { ( endState === "failed") && 
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "auto",
                        marginBottom: "auto"
                    }}>
                        <h2 style={{textAlign: "center"}}>Sorry, something went wrong.</h2>
                        <p style={{color: "var(--gray600", marginBottom: "48px"}} className='p-large'>Maybe try again.</p>
                        <div onClick={() => window.location.reload()} style={{width: "70%", textAlign: "center"}}><button className="confirmation-button">Try Again</button></div>
                    </div>
                }
            </div>
        </div>
    )
}