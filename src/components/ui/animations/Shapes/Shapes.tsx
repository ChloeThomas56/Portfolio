export default function Shapes() {
    return (
        <div className="bg">
            <svg className="bg__shape bg__shape1" viewBox="146 146 508 508" xmlns="http://www.w3.org/2000/svg">
                <filter id="circle-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="15"/>
                    <feOffset dx="-20" dy="10" result="offsetblur"/>
                    <feFlood floodColor="var(--shape-shadow-color)" result="color"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
                <circle 
                    cx="400" 
                    cy="400" 
                    fill="none"
                    r="164" 
                    strokeWidth="180" 
                    strokeDasharray="700 1400"
                    strokeLinecap="round"
                    strokeDashoffset="-270"
                    filter="url(#circle-shadow)" />
            </svg>
            <svg className="bg__shape bg__shape2" viewBox="0 0 365 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <filter id="path-shadow" x="-75%" y="-75%" width="300%" height="300%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="15"/>
                    <feOffset dx="20" dy="10" result="offsetblur"/>
                    <feFlood floodColor="var(--shape-shadow-color)" result="color"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
                <path 
                    d="M46.4619 118.322C52.7475 112 71.8666 91.4167 86.6177 84.2418C92.4956 81.3828 107.049 74.7829 124.477 76.17C150.519 79 159.656 87.5 176.763 91.4167C197.557 96.1773 215.198 97.0549 236.587 94.1073C257.977 91.1596 271.553 85.5333 287.397 76.17C303.241 66.8068 314.08 52.5 318.538 45.6768" 
                    fill="none" 
                    strokeWidth="91" 
                    strokeLinecap="round"
                    strokeDasharray="0 0"
                    filter="url(#path-shadow)"
                />
            </svg>
        </div>
    )
}