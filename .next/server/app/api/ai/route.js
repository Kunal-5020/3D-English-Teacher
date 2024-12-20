"use strict";(()=>{var e={};e.id=252,e.ids=[252],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5644:(e,t,n)=>{n.r(t),n.d(t,{headerHooks:()=>eo,originalPathname:()=>er,patchFetch:()=>el,requestAsyncStorage:()=>en,routeModule:()=>et,serverHooks:()=>ei,staticGenerationAsyncStorage:()=>es,staticGenerationBailout:()=>ea});var s,i,o,a,r,l,c,d,u,h,f,p,g={};n.r(g),n.d(g,{GET:()=>ee});var m=n(5419),E=n(9108),y=n(9678);(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(s||(s={})),function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"}(i||(i={})),function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(o||(o={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=["user","model","function","system"];(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(a||(a={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(r||(r={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(l||(l={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(c||(c={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"}(d||(d={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(u||(u={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"}(h||(h={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"}(f||(f={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class O extends v{constructor(e,t){super(e),this.response=t}}class _ extends v{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class A extends v{}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(p||(p={}));class I{constructor(e,t,n,s,i){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function T(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new A(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new A(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new A(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function w(e,t,n,s,i,o){let a=new I(e,t,n,s,o);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(o)),{method:"POST",headers:await T(a),body:i})}}async function S(e,t,n,s,i,o={},a=fetch){let{url:r,fetchOptions:l}=await w(e,t,n,s,i,o);return N(r,l,a)}async function N(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){(function(e,t){let n=e;throw e instanceof _||e instanceof A||((n=new v(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n})(t,e)}return s.ok||await R(s,e),s}async function R(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new _(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new O(`${H(e)}`,e);return function(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.text&&o.push(t.text),t.executableCode&&o.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&o.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}(e)}if(e.promptFeedback)throw new O(`Text not available. ${H(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new O(`${H(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),M(e)[0]}if(e.promptFeedback)throw new O(`Function call not available. ${H(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new O(`${H(e)}`,e);return M(e)}if(e.promptFeedback)throw new O(`Function call not available. ${H(e)}`,e)},e}function M(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.functionCall&&o.push(t.functionCall);return o.length>0?o:void 0}let x=[d.RECITATION,d.SAFETY,d.LANGUAGE];function D(e){return!!e.finishReason&&x.includes(e.finishReason)}function H(e){var t,n,s;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];D(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function k(e){return this instanceof k?(this.v=e,this):new k(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function L(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return b(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let i of e.content.parts)i.text&&(s.text=i.text),i.functionCall&&(s.functionCall=i.functionCall),i.executableCode&&(s.executableCode=i.executableCode),i.codeExecutionResult&&(s.codeExecutionResult=i.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:i})=>{let o;if(i){if(n.trim()){e.error(new v("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(P);for(;a;){try{o=JSON.parse(a[1])}catch(t){e.error(new v(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(o),a=(n=n.substring(a[0].length)).match(P)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,i=n.apply(e,t||[]),o=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){i[e]&&(s[e]=function(t){return new Promise(function(n,s){o.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=i[e](t)).value instanceof k?Promise.resolve(n.value.v).then(l,c):d(o[0][2],n)}catch(e){d(o[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),o.shift(),o.length&&r(o[0][0],o[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield k(t.read());if(n)break;yield yield k(b(e))}})}(t),response:L(n)}}(await S(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function F(e,t,n,s){let i=await S(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:b(await i.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function j(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,i=!1;for(let o of e)"functionResponse"in o?(n.parts.push(o),i=!0):(t.parts.push(o),s=!0);if(s&&i)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!i)throw new v("No content is provided for sending chat message.");return s?t:n}(t)}function G(e){let t;return t=e.contents?e:{contents:[j(e)]},e.systemInstruction&&(t.systemInstruction=$(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],K={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},Y="SILENT_ERROR";class q{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new v(`First content should be with role 'user', got ${e}`);if(!C.includes(e))throw new v(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(C)}`);if(!Array.isArray(s))throw new v("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new v("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of B)t in e&&(i[t]+=1);let o=K[e];for(let t of B)if(!o.includes(t)&&i[t]>0)throw new v(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,i,o,a,r;let l;await this._sendPromise;let c=j(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>F(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=H(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,i,o,a,r;await this._sendPromise;let l=j(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=U(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(Y)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=H(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Y&&console.error(e)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n,s){return(await S(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,n,s){return(await S(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function z(e,t,n,s){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await S(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=$(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=G(e),i=Object.assign(Object.assign({},this._requestOptions),t);return F(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),i)}async generateContentStream(e,t={}){var n;let s=G(e),i=Object.assign(Object.assign({},this._requestOptions),t);return U(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),i)}startChat(e){var t;return new q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},i=null!=e.generateContentRequest;if(e.contents){if(i)throw new A("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(i)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=j(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return J(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:j(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return z(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new W(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new A("Cached content must contain a `name` field.");if(!e.model)throw new A("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new A(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new W(this.apiKey,s,n)}}var Q=n(7566);let Z=new X(process.env.GEMINI_API_KEY).getGenerativeModel({model:"gemini-1.5-flash"});async function ee(e){let t=(0,Q.Q)(e.headers.get("cookie")||""),n=t.conversationHistory?JSON.parse(t.conversationHistory):[],s=e.nextUrl.searchParams.get("question")||"Introduce yourself and ask for the user name",i="English";s.includes("HindiModeActivate")?i="Hindi":(s.includes("HindiModeDeactivate")||s.includes("EnglishModeActivate"))&&(i="English");let o=n.length?n.map(({user:e,assistant:t})=>`User: ${e}
Assistant: ${t}`).join("\n"):"No previous conversation.",a=`
    You are an advanced English learning assistant designed to help users improve their English skills. Follow these rules based on the language mode:
    
    **Language Mode: ${i}**
  
    1.Always respond in the following JSON structure:
    {
      "text": "<The assistant's reply in natural, conversational language>",
      "grammar_mistakes": "<Detailed explanation of any grammar mistakes in the user's sentence (only if there are mistakes)>"
    }
    
    2. **If the user speaks in Hindi (Hindi Mode)**:
       - Respond in Hindi unless the user asks otherwise.
       - Use simple, clear Hindi ensuring it’s easy to understand.
       - if the user response in english then still send your response in Hindi.
    
    3. **If the user speaks in English (English Mode)**:
       - Analyze the user’s sentence for grammar, spelling, or phrasing issues.
       - Provide corrections with concise explanations (100-150 characters). If the explanation is longer, divide it into parts and confirm before continuing (e.g., "Would you like me to continue?").
       - If there are no mistakes then just give the grammerMistake as null.
       -if the user replys in hindi then translate the user’s sentence into English, providing a brief explanation in Hindi, e.g., "Aap is vaaky ko angrezee mein is tarah bol sakte hain".
    
    4. **General Rules for Both Modes**:
       - Always keep responses concise, interactive, and engaging.
       - If the user’s query relates to a large topic, divide your explanation into smaller, digestible parts and seek confirmation after each.
       - Verify that your responses are accurate, clear, and grammatically correct, with no repeated or irrelevant information.
       - For scenario-based exercises or tasks (e.g., role-playing conversations), guide the user step by step.
       - And always verify the response before sending it to the user, that does the reply matches the desired results user wants.
       - Make sure the response is proper and make sense and doesnt contain any grammatical errors or repeated words, simply put the response should be clear and concise.
  
    
    5. **Language Mode Switching**:
       - If the user sends "HindiModeActivate," switch to Hindi for all responses until "HindiModeDeactivate" or "EnglishModeActivate" is received.
       - Acknowledge the mode change in your first response after activation.
  
    
    
    **Conversation History**:
    ${o}
    
    **User’s Current Reply or question**:
    User - ${s}
    `;try{let e;let t=await Z.generateContent(a);try{e=JSON.parse(t.response.candidates[0].content.parts[0].text.replace(/```json|```/g,"").trim())}catch(e){throw Error("Failed to parse AI response JSON")}n.push({user:s,assistant:e.text});let i=(0,Q.q)("conversationHistory",JSON.stringify(n),{path:"/"});return new Response(JSON.stringify({result:e}),{headers:{"Content-Type":"application/json","Set-Cookie":i}})}catch(e){return console.error("Error generating content:",e),new Response(JSON.stringify({error:"Failed to generate response"}),{status:500,headers:{"Content-Type":"application/json"}})}}let et=new m.AppRouteRouteModule({definition:{kind:E.x.APP_ROUTE,page:"/api/ai/route",pathname:"/api/ai",filename:"route",bundlePath:"app/api/ai/route"},resolvedPagePath:"C:\\Users\\kunal\\OneDrive\\Desktop\\test2\\test3\\3D-English-Teacher\\src\\app\\api\\ai\\route.js",nextConfigOutput:"",userland:g}),{requestAsyncStorage:en,staticGenerationAsyncStorage:es,serverHooks:ei,headerHooks:eo,staticGenerationBailout:ea}=et,er="/api/ai/route";function el(){return(0,y.patchFetch)({serverHooks:ei,staticGenerationAsyncStorage:es})}},5419:(e,t,n)=>{e.exports=n(517)},7566:(e,t)=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");var n={},s=e.length;if(s<2)return n;var i=t&&t.decode||c,o=0,a=0,d=0;do{if(-1===(a=e.indexOf("=",o)))break;if(-1===(d=e.indexOf(";",o)))d=s;else if(a>d){o=e.lastIndexOf(";",a-1)+1;continue}var u=r(e,o,a),h=l(e,a,u),f=e.slice(u,h);if(!n.hasOwnProperty(f)){var p=r(e,a+1,d),g=l(e,d,p);34===e.charCodeAt(p)&&34===e.charCodeAt(g-1)&&(p++,g--);var m=e.slice(p,g);n[f]=function(e,t){try{return t(e)}catch(t){return e}}(m,i)}o=d+1}while(o<s);return n},t.q=function(e,t,r){var l=r&&r.encode||encodeURIComponent;if("function"!=typeof l)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var c=l(t);if(!i.test(c))throw TypeError("argument val is invalid");var d=e+"="+c;if(!r)return d;if(null!=r.maxAge){var u=Math.floor(r.maxAge);if(!isFinite(u))throw TypeError("option maxAge is invalid");d+="; Max-Age="+u}if(r.domain){if(!o.test(r.domain))throw TypeError("option domain is invalid");d+="; Domain="+r.domain}if(r.path){if(!a.test(r.path))throw TypeError("option path is invalid");d+="; Path="+r.path}if(r.expires){var h=r.expires;if("[object Date]"!==n.call(h)||isNaN(h.valueOf()))throw TypeError("option expires is invalid");d+="; Expires="+h.toUTCString()}if(r.httpOnly&&(d+="; HttpOnly"),r.secure&&(d+="; Secure"),r.partitioned&&(d+="; Partitioned"),r.priority)switch("string"==typeof r.priority?r.priority.toLowerCase():r.priority){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return d};var n=Object.prototype.toString,s=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,i=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/;function r(e,t,n){do{var s=e.charCodeAt(t);if(32!==s&&9!==s)return t}while(++t<n);return n}function l(e,t,n){for(;t>n;){var s=e.charCodeAt(--t);if(32!==s&&9!==s)return t+1}return n}function c(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[638],()=>n(5644));module.exports=s})();