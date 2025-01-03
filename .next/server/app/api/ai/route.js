"use strict";(()=>{var e={};e.id=252,e.ids=[252],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},1428:(e,t,n)=>{n.r(t),n.d(t,{headerHooks:()=>eu,originalPathname:()=>ef,patchFetch:()=>ey,requestAsyncStorage:()=>el,routeModule:()=>er,serverHooks:()=>ed,staticGenerationAsyncStorage:()=>ec,staticGenerationBailout:()=>eh});var s,o,i,a,r,l,c,d,u,h,f,y,p={};n.r(p),n.d(p,{GET:()=>ea});var g=n(5419),m=n(9108),E=n(9678);(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(s||(s={})),function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"}(o||(o={})),function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(i||(i={}));/**
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
 */class v extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class S extends v{constructor(e,t){super(e),this.response=t}}class O extends v{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class D extends v{}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(y||(y={}));class I{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function T(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new D(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new D(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new D(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function A(e,t,n,s,o,i){let a=new I(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await T(a),body:o})}}async function w(e,t,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await A(e,t,n,s,o,i);return _(r,l,a)}async function _(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){(function(e,t){let n=e;throw e instanceof O||e instanceof D||((n=new v(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n})(t,e)}return s.ok||await N(s,e),s}async function N(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new O(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
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
 */function R(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),x(e.candidates[0]))throw new S(`${H(e)}`,e);return function(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new S(`Text not available. ${H(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),x(e.candidates[0]))throw new S(`${H(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),b(e)[0]}if(e.promptFeedback)throw new S(`Function call not available. ${H(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),x(e.candidates[0]))throw new S(`${H(e)}`,e);return b(e)}if(e.promptFeedback)throw new S(`Function call not available. ${H(e)}`,e)},e}function b(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}let P=[d.RECITATION,d.SAFETY,d.LANGUAGE];function x(e){return!!e.finishReason&&P.includes(e.finishReason)}function H(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];x(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function M(e){return this instanceof M?(this.v=e,this):new M(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let U=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function F(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return R(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let o of e.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
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
 */async function k(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new v("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(U);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new v(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(U)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=o[e](t)).value instanceof M?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield M(t.read());if(n)break;yield yield M(R(e))}})}(t),response:F(n)}}(await w(t,y.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function L(e,t,n,s){let o=await w(t,y.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:R(await o.json())}}/**
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
 */function $(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function j(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new v("No content is provided for sending chat message.");return s?t:n}(t)}function G(e){let t;return t=e.contents?e:{contents:[j(e)]},e.systemInstruction&&(t.systemInstruction=$(e.systemInstruction)),t}/**
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
 */let q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],B={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},Y="SILENT_ERROR";class K{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new v(`First content should be with role 'user', got ${e}`);if(!C.includes(e))throw new v(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(C)}`);if(!Array.isArray(s))throw new v("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new v("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of q)t in e&&(o[t]+=1);let i=B[e];for(let t of q)if(!i.includes(t)&&o[t]>0)throw new v(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=j(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>L(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=H(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,o,i,a,r;await this._sendPromise;let l=j(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=k(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(Y)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=H(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Y&&console.error(e)}),u}}/**
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
 */async function J(e,t,n,s){return(await w(t,y.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function W(e,t,n,s){return(await w(t,y.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function V(e,t,n,s){let o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await w(t,y.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class z{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=$(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=G(e),o=Object.assign(Object.assign({},this._requestOptions),t);return L(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;let s=G(e),o=Object.assign(Object.assign({},this._requestOptions),t);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new K(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=e.generateContentRequest;if(e.contents){if(o)throw new D("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=j(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return J(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:j(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return W(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,e,n)}}/**
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
 */class Q{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new z(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new D("Cached content must contain a `name` field.");if(!e.model)throw new D("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new D(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new z(this.apiKey,s,n)}}var X=n(6758),Z=n(9087),ee=n(7147),et=n.n(ee),en=n(1017),es=n.n(en);let eo=new Q(process.env.GEMINI_API_KEY).getGenerativeModel({model:"gemini-1.5-flash"});async function ei(e,t){try{let n=await fetch("http://localhost:3000/updatehistory",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,allHistorySummary:t})});if(!n.ok){let e=await n.json();console.error("Error updating history:",e.error),alert(`Failed to update history: ${e.error}`);return}let s=await n.json();console.log("History updated successfully:",s),alert("History updated successfully!")}catch(e){console.error("Error sending update request:",e),alert("An error occurred while updating history.")}}async function ea(e){let t=(0,X.Qc)(e.headers.get("cookie")||""),n=t.conversationHistory?JSON.parse(t.conversationHistory):[],s=e.nextUrl.searchParams.get("question")||"Start the conversation",o=es().join(process.cwd(),"src","app","storage","userData.json"),i=et().existsSync(o)?JSON.parse(et().readFileSync(o,"utf8")):null,a=n.length?n.map(({user:e,assistant:t})=>`User: ${e}
Assistant: ${t}`).join("\n"):"No previous conversation.",r=`
You are an advanced English learning assistant tasked with teaching the user English in 90 days, following a structured plan. Personalize all interactions using the user's information and ensure progress is recorded properly. Respond strictly in the following JSON structure:

{
  "ReplyForUser": "<The assistant's reply in natural, conversational language, limited to 200 characters per part>",
  "AllSummaryHistory": "<Updated all-summary-history by keeping in mind the users current All Summary History and currenthistory>",
}

## Rules and Instructions:

1. **Personalization**:
   - Refer to the user by their name and adapt responses to their age and education level.
   - Use their education to set complexity and provide actionable insights.
   - Begin with a greeting only on the first interaction of the day.

2. **Response Rules**:
   - Reference the 90-day plan only once when addressing the day’s topic. Avoid repetition unless asked explicitly.
   - Strictly adhere to the 200-character limit per response part. Split into sequential parts if necessary.
   - Exclude unnecessary details like the full day description repeatedly. Focus only on answering the user’s query or teaching the day’s topic.

3. **Checklist Day and History**:
   - Calculate the current day using: \`Math.ceil((new Date().toISOString() - userData.createdAt) / (1000 * 60 * 60 * 24))\`.
   - Limit progress to the active day unless the user requests to skip or revisit.
   - Update and expand the \`AllSummaryHistory\` concisely to reflect completed activities or new insights.

4. **Content Goals**:
   - Provide context-specific examples, corrections, and encouragement.
   - Include advanced resources or exercises aligned with the day’s lesson.
   - Track progress consistently and inform the user subtly about milestones.

5. **Behavior for Excessive Responses**:
   - If a response exceeds 200 characters, prioritize clarity and relevance. Split the reply into logical parts labeled sequentially (e.g., Part 1, Part 2).

6. **Fallback Behavior**:
   - For missing or insufficient data, inform the user briefly about the limitation and proceed with general guidance or a relevant response.

## User's 90-Day Plan:
Day 1: Introduction + Greetings
Day 2: Parts of Language and its Importance + Explaining Through Conversation
Day 3: Sentences and its Types + Real-Life Usage
Day 4: Use this MR/Now
Day 5: Countable & Uncountable Nouns, Pronouns, Singular & Plural Pronouns
Day 6: Adjectives & Degree + Conversations
Day 7: WH- Words, Witch, Wye, Van, Ware, Freys
Day 8: Alphabets, Sounds & Phonetics
Day 9: Manners & Etiquettes + Conversations
Day 10: Revision and Summary
Day 11: Present Tense + Conversation
Day 12: Past Tense + Conversation
Day 13: Future Tense + Conversation
Day 14: Fond of Screed Off/Real Life Application
Day 15: Silent Letters in Words and Homophones
Day 16: There and It / There, It's / It's He's, She's + Narration
Day 17: Vowels and Articles
Day 18: Active and Passive Voice
Day 19: Experiment Seam, Appear, End Sound + Conversation
Day 20: Experiment Hao Offan du U / Adverbs of Frequency
Day 21: Experiment Verbs and Adverbs, Let's Have, Have To, Head to
Day 22: Congestion, Interjection and Acceleration Sentences
Day 23: Have You Ever/Present Perfect + Conversation
Day 24: Relative Pronouns and Its Question
Day 25: Prepositions (Place)
Day 26: Time, Day, Month & Weather + Conversation
Day 27: Use of 'Was' - Above Us/Ever/Never
Day 28: Indefinite Pronouns/Sum/Anne
Day 29: Past Continuous + Conversation
Day 30: Clause: Principal Clause/Subordinate and Coordinate Clause
Day 31: Past Perfect/Head + III Form + Conversation Related to Past Perfect
Day 32: Summary
Day 33: How Long Have You / Present Perfect Continuous + Conversation at Home
Day 34: Experiment Has Been/Have Been, Rules of Subject-Verb Agreement
Day 35: Experiment Feel Like Doing/Want to Do, Think of Doing Something + Conversation in the Meeting
Day 36: Helping Verbs
Day 37: Modals and Idioms
Day 38: Question Tags
Day 39: Past Indefinite
Day 40: Gerund and Infinitive
Day 41: Tense and Revision of All Tenses
Day 42: Summary
Day 43: Will Have Gone/Future Perfect + Conversation
Day 44: Miscellaneous Uses
Day 45: Transformation of Sentences
Day 46: Request & Order + Conversation in the Restaurant
Day 47: Meals
Day 48: Time
Day 49: Instruction/Instructions Order
Day 50: Instruction/Instructions Order (Continued)
Day 51: Encouragement
Day 52: Negotiation
Day 53: Quarrel (Battle Fight)
Day 54: Office Conversation
Day 55: Law Conversation
Day 56: Travel Conversation
Day 57: Entertainment Conversation
Day 58: Dealing Conversation
Day 59: Saying
Day 60: Attending Wedding
Day 61: Vocabulary
Day 62: Drill Tables
Day 63: Test/Examination
Day 64: Useful Phrases - Part 1
Day 65: Useful Phrases - Part 2
Day 66: Useful Phrases - Part 3
Day 67: Storytelling - Part 1
Day 68: Storytelling - Part 2
Day 69: Storytelling - Part 3
Day 70: Storytelling - Part 4
Day 71: Introduction (Self & Others) - Part 1
Day 72: Introduction (Self & Others) - Part 2
Day 73: Introduction (Self & Others) - Part 3
Day 74: Introduction (Self & Others) - Part 4
Day 75: Interview Skills - Part 1
Day 76: Interview Skills - Part 2
Day 77: Interview Skills - Part 3
Day 78: Interview Skills - Part 4
Day 79: Etiquette & Etiquette - Part 1
Day 80: Etiquette and Etiquettes - Part 2
Day 81: Etiquette and Etiquettes - Part 3
Day 82: Building Confidence - Part 1
Day 83: Boosting Confidence - Part 2
Day 84: Boosting Confidence - Part 3
Day 85: Boosting Confidence - Part 4
Day 86: Personality Development - Part 1
Day 87: Personality Development - Part 2
Day 88: Personality Development - Part 3
Day 89: Personality Development - Part 4
Day 90: Personality Development - Part 5

## User Information:
- Name: ${i.name}
- Age: ${i.age}
- Highest Education: ${i.highestEducation}

- Checklist Day: ${Math.ceil((new Date().toISOString()-i.createdAt)/864e5)} day (continue with this day unless instructed otherwise)
- Current History: ${a||"No recent activity"}
- All Summary History: ${""===i.allHistorySummary?i.allHistorySummary:"No History"}

**User’s Current Reply or Question**:
User - ${s}
`;console.log("checklist",i.checklist),console.log("history",i.allHistorySummary);try{let e;let t=await eo.generateContent(r);try{e=JSON.parse(t.response.candidates[0].content.parts[0].text.replace(/```json|```/g,"").trim())}catch(e){throw Error("Failed to parse AI response JSON")}n.push({user:s,assistant:e.ReplyForUser});let o=[(0,X.qC)("conversationHistory",JSON.stringify(n),{path:"/"})].join("; ");return i.checklist=e.ChecklistDay,i.allHistorySummary=e.AllSummaryHistory,ei(i._id,i.allHistorySummary),(0,Z.gt)(i),new Response(JSON.stringify({result:e}),{headers:{"Content-Type":"application/json","Set-Cookie":o}})}catch(e){return console.error("Error generating content:",e),new Response(JSON.stringify({error:"Failed to generate response"}),{status:500,headers:{"Content-Type":"application/json"}})}}let er=new g.AppRouteRouteModule({definition:{kind:m.x.APP_ROUTE,page:"/api/ai/route",pathname:"/api/ai",filename:"route",bundlePath:"app/api/ai/route"},resolvedPagePath:"C:\\Users\\kunal\\OneDrive\\Desktop\\test2\\3D-English-Teacher\\src\\app\\api\\ai\\route.js",nextConfigOutput:"",userland:p}),{requestAsyncStorage:el,staticGenerationAsyncStorage:ec,serverHooks:ed,headerHooks:eu,staticGenerationBailout:eh}=er,ef="/api/ai/route";function ey(){return(0,E.patchFetch)({serverHooks:ed,staticGenerationAsyncStorage:ec})}},6758:(e,t)=>{t.Qc=function(e,t){let n=new r,s=e.length;if(s<2)return n;let o=t?.decode||d,i=0;do{let t=e.indexOf("=",i);if(-1===t)break;let a=e.indexOf(";",i),r=-1===a?s:a;if(t>r){i=e.lastIndexOf(";",t-1)+1;continue}let d=l(e,i,t),u=c(e,t,d),h=e.slice(d,u);if(void 0===n[h]){let s=l(e,t+1,r),i=c(e,r,s),a=o(e.slice(s,i));n[h]=a}i=r+1}while(i<s);return n},t.qC=function(e,t,r){let l=r?.encode||encodeURIComponent;if(!n.test(e))throw TypeError(`argument name is invalid: ${e}`);let c=l(t);if(!s.test(c))throw TypeError(`argument val is invalid: ${t}`);let d=e+"="+c;if(!r)return d;if(void 0!==r.maxAge){if(!Number.isInteger(r.maxAge))throw TypeError(`option maxAge is invalid: ${r.maxAge}`);d+="; Max-Age="+r.maxAge}if(r.domain){if(!o.test(r.domain))throw TypeError(`option domain is invalid: ${r.domain}`);d+="; Domain="+r.domain}if(r.path){if(!i.test(r.path))throw TypeError(`option path is invalid: ${r.path}`);d+="; Path="+r.path}if(r.expires){var u;if(u=r.expires,"[object Date]"!==a.call(u)||!Number.isFinite(r.expires.valueOf()))throw TypeError(`option expires is invalid: ${r.expires}`);d+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(d+="; HttpOnly"),r.secure&&(d+="; Secure"),r.partitioned&&(d+="; Partitioned"),r.priority)switch("string"==typeof r.priority?r.priority.toLowerCase():void 0){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw TypeError(`option priority is invalid: ${r.priority}`)}if(r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw TypeError(`option sameSite is invalid: ${r.sameSite}`)}return d};let n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,r=(()=>{let e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{let n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){let n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function d(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},5419:(e,t,n)=>{e.exports=n(517)},9087:(e,t,n)=>{n.d(t,{gt:()=>r,is:()=>l});var s=n(7147),o=n.n(s),i=n(1017);let a=n.n(i)().join(process.cwd(),"src","app","storage","userData.json");function r(e){o().writeFileSync(a,JSON.stringify(e,null,2),"utf8"),console.log("saved")}function l(){return o().existsSync(a)?JSON.parse(o().readFileSync(a,"utf8")):null}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[638],()=>n(1428));module.exports=s})();