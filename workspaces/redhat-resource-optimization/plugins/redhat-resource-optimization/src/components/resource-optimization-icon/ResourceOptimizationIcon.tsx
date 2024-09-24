/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

/**
 * The Resource Optimization icon.
 *
 * @public
 */
export const ResourceOptimizationIcon = (
  props: SvgIconProps & { variant?: 'outlined' | 'filled' },
) => {
  const variant = props.variant ?? 'outlined';
  const path =
    variant === 'outlined' ? (
      <path d="M10.9999948,16.8089888 C14.0684705,16.8089888 16.564698,14.4249501 16.564698,11.494382 C16.564698,10.8850957 16.458539,10.2893259 16.2482502,9.72348591 C16.1289533,9.40193985 16.3048704,9.0485358 16.6415375,8.93460052 C16.9792193,8.82066524 17.3472351,8.98867602 17.4675466,9.31021216 C17.7273845,10.009298 17.8588152,10.7441178 17.8588152,11.4943721 C17.8588152,15.1066436 14.7822538,18.044934 10.9999948,18.044934 C7.21773589,18.044934 4.14117451,15.1066436 4.14117451,11.4943721 C4.14117451,9.16247108 5.45551085,6.98796136 7.57058467,5.8205672 C7.87996147,5.64965934 8.27426335,5.7510472 8.45422849,6.04651956 C8.63317894,6.34199192 8.52701993,6.7195317 8.21764314,6.89044945 C6.50192352,7.83865439 5.43529156,9.60278749 5.43529156,11.494382 C5.43529156,14.4249501 7.93151914,16.8089888 10.9999948,16.8089888 Z M11,22 C4.93483061,22 0,17.2869573 0,11.494382 C0,6.87983012 3.09476184,2.85138788 7.69999637,1.46962967 C8.04374487,1.36727281 8.40467928,1.54880989 8.51185298,1.87421213 C8.61902653,2.19961438 8.42894662,2.54722428 8.08823148,2.64958113 C4.02389645,3.86815371 1.29411703,7.4224935 1.29411703,11.494382 C1.29411703,16.605254 5.6486138,20.764045 11,20.764045 C16.3513759,20.764045 20.7058726,16.605254 20.7058726,11.494382 C20.7058726,9.86543278 20.2569796,8.26255733 19.4077076,6.85955058 C19.2287571,6.56407822 19.3349161,6.18653845 19.6442929,6.01562069 C19.9516509,5.84471282 20.3489758,5.9451317 20.5279367,6.24157304 C21.4914431,7.83190114 22,9.64817176 22,11.494382 C22,17.2869573 17.0651694,22 11,22 L11,22 Z M10.9999948,12.9775281 C11.8576601,12.9775281 12.5529353,12.313501 12.5529353,11.494382 C12.5529353,10.6752631 11.8576601,10.011236 10.9999948,10.011236 C10.1423295,10.011236 9.44705437,10.6752631 9.44705437,11.494382 C9.44705437,12.313501 10.1423295,12.9775281 10.9999948,12.9775281 Z M11.6470534,1.25429663 L11.6470534,8.98142833 C11.9169336,9.04497625 12.169183,9.14745171 12.4007782,9.28172581 L18.1165722,3.82281889 C16.3104817,2.2917672 14.0562023,1.38990562 11.6470534,1.25429663 Z M10.3529362,8.98143827 L10.3529362,0.617977534 C10.3529362,0.277120904 10.643098,0 10.9999948,0 C14.2127905,0 17.2334978,1.19455551 19.507044,3.36363687 C19.5081828,3.36466518 19.5096943,3.36496181 19.5108332,3.36604944 C19.5976528,3.44933305 19.6434646,3.55235237 19.6703823,3.65910923 C19.70229,3.78439551 19.7037497,3.91547596 19.6525027,4.03598652 C19.6210299,4.11057889 19.5738307,4.18046473 19.5108332,4.24086832 L13.3167646,10.1565546 C13.5659183,10.5485798 13.7176406,11.0033124 13.7176406,11.494382 C13.7176406,12.9253906 12.4983443,14.0898877 10.9999948,14.0898877 C9.50164536,14.0898877 8.28234904,12.9253906 8.28234904,11.494382 C8.28234904,10.2773816 9.16750444,9.26054649 10.3529362,8.98143827 Z" />
    ) : (
      <path d="M16.5,0 C19.5375767,0 22,2.46242333 22,5.5 L22,16.5 C22,19.53754 19.5375767,22 16.5,22 L5.5,22 C2.46242333,22 0,19.53754 0,16.5 L0,5.5 C0,2.46242333 2.46242333,0 5.5,0 Z M9.13388974,4.1556591 C9.05350946,3.91160741 8.78280865,3.77545461 8.52499728,3.85222225 C5.07107138,4.88854091 2.75,7.90987259 2.75,11.3707865 C2.75,15.715218 6.45112296,19.25 11.0000039,19.25 C15.5488771,19.25 19.25,15.715218 19.25,11.3707865 C19.25,9.98612882 18.8685823,8.62392586 18.1459525,7.43117978 C18.0117319,7.20884877 17.7137382,7.13353461 17.4832197,7.26171552 C17.2511871,7.38990383 17.1715678,7.67305866 17.3057807,7.89466293 C17.9427347,8.946918 18.2794045,10.1490746 18.2794045,11.3707865 C18.2794045,15.2039405 15.0135319,18.3230337 10.9999961,18.3230337 C6.98646035,18.3230337 3.72058777,15.2039405 3.72058777,11.3707865 C3.72058777,8.31687012 5.76792234,5.65111528 8.81617361,4.73718585 C9.07170996,4.66041821 9.2142699,4.39971079 9.13388974,4.1556591 Z M9.09067137,7.28488967 C8.95569751,7.0632854 8.6599711,6.9872445 8.42793851,7.1154254 C6.84163313,7.99097102 5.85588088,9.62185331 5.85588088,11.3707791 C5.85588088,14.0799827 8.16330192,16.2837005 10.9999961,16.2837005 C13.8366903,16.2837005 16.1441114,14.0799827 16.1441114,11.3707791 C16.1441114,10.8080883 16.0455384,10.2569735 15.8506599,9.73265912 C15.7604263,9.49150702 15.4844145,9.36549893 15.2311531,9.45095039 C14.9786528,9.53640185 14.846715,9.80145488 14.9361877,10.0426144 C15.0939043,10.4669944 15.1735235,10.9138218 15.1735235,11.3707865 C15.1735235,13.5687126 13.3013529,15.3567416 10.9999961,15.3567416 C8.69863935,15.3567416 6.82646867,13.5687126 6.82646867,11.3707865 C6.82646867,9.95209062 7.62644264,8.6289908 8.91323235,7.91783709 C9.14526495,7.78964877 9.22488421,7.50649394 9.09067137,7.28488967 Z M10.9999961,2.75 C10.7323235,2.75 10.5147022,2.95784068 10.5147022,3.21348315 L10.5147022,9.4860787 C9.62562833,9.69540987 8.96176178,10.4580362 8.96176178,11.3707865 C8.96176178,12.444043 9.87623402,13.3174158 10.9999961,13.3174158 C12.1237582,13.3174158 13.0382305,12.444043 13.0382305,11.3707865 C13.0382305,11.0024843 12.9244387,10.6614348 12.7375734,10.367416 L17.3831249,5.93065124 C17.4303731,5.88534855 17.4657724,5.83293417 17.489377,5.77698989 C17.5278123,5.68660697 17.5267175,5.58829664 17.5027867,5.49433192 C17.4825984,5.41426428 17.4482396,5.33699978 17.380283,5.27272765 C15.6751233,3.64591663 13.4095929,2.75 10.9999961,2.75 Z M10.9999961,10.258427 C11.6432451,10.258427 12.1647015,10.7564473 12.1647015,11.3707865 C12.1647015,11.9851258 11.6432451,12.4831461 10.9999961,12.4831461 C10.3567471,12.4831461 9.83529078,11.9851258 9.83529078,11.3707865 C9.83529078,10.7564473 10.3567471,10.258427 10.9999961,10.258427 Z M11.48529,3.69072247 C13.2921517,3.79242921 14.9828613,4.4688254 16.3374292,5.61711417 L12.0505836,9.71129436 C11.8768873,9.61058878 11.6877002,9.53373219 11.48529,9.48607125 Z" />
    );

  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {path}
    </SvgIcon>
  );
};
