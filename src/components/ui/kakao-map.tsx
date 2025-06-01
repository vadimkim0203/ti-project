import Script from 'next/script';
import { useEffect } from 'react';

const KakaoMap = () => {
  // useEffect(() => {
  //     if (window.kakao) {
  //         const container = document.getElementById('kakao-map');
  //         const options = {
  //             center: new window.kakao.maps.LatLng(37.456257, 126.705208),
  //             level: 3
  //         };
  //          const map = new window.kakao.maps.Map(container, options);
  //          const marker = new window.kakao.maps.Marker({
  //     position: options.center,
  //   });
  //   marker.setMap(map);
  //     }
  // }, [])
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`}
        strategy="beforeInteractive"
        //   onLoad={() => {
        //       window.kakao.maps.load(() => {});
      />
    </>
  );
};

export default KakaoMap;
