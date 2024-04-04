import "./styles/NaElectrons.css"

const NaElectrons = () => {
    return (
        <div className="na-main-container">
            <div className="na-container">
                <div className="na">
                    <div className="na-nuclease">
                        <h1>Na</h1>
                    </div>
                    <div className="na-shell">
                        <div className="na-K-shell center-shell">
                            <div className="na-K-shell-inside animation-spin">
                                <div className="na-electron na-1s1"></div>
                                <div className="na-electron na-1s2"></div>
                            </div>
                        </div>
                        <div className="na-L-shell center-shell">
                            <div className="na-L-shell-inside animation-spin-3s">
                                <div className="na-electron na-2s1"></div>
                                <div className="na-electron na-2s2"></div>
                                <div className="na-electron na-2p1"></div>
                                <div className="na-electron na-2p2"></div>
                                <div className="na-electron na-2p3"></div>
                                <div className="na-electron na-2p4"></div>
                                <div className="na-electron na-2p5"></div>
                                <div className="na-electron na-2p6"></div>
                            </div>
                        </div>
                        <div className="na-M-shell center-shell">
                            <div className="na-M-shell-inside animation-spin-4s">
                                <div className="na-electron na-3s1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NaElectrons