function ProgressBar({percent}) {
    return <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: (percent + '%')}} aria-valuenow={percent}
             aria-valuemin="0"
             aria-valuemax="100">{percent}%
        </div>
    </div>;
}

export default ProgressBar;
