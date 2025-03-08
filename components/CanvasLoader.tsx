'use client';

import { Html, useProgress } from '@react-three/drei';

// Define the component with no props (since none are passed)
const CanvasLoader: React.FC = () => {
    const { progress } = useProgress(); // progress is a number from 0 to 100

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader" />
            <p
                style={{
                    fontSize: 14,
                    color: '#F1F1F1',
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;