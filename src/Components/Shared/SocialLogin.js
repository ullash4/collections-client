import React from 'react'

function SocialLogin() {
    const handleSignInWithGoogle = () => {
        console.log(0);
      };
  return (
    <div>
        <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-primary w-full max-w-xs mb-5  btn-outline"
      >
        Continue with Google
      </button>
    </div>
    </div>
  )
}

export default SocialLogin