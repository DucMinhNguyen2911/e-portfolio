import React from "react";

function Tool() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Azure Portal</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Swagger</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Xmind</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool;