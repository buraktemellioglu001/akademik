<template>
  <div>
    <div class="content " id="">

      <div id="search-page">
        <h1>Akademisyen Arama</h1>

        <div class="col-md-12">
          <vs-input style="width: 100%" v-model="academicanId" size="large" placeholder="Akademisyen ID sini giriniz."/>
        </div>
        <div class="col-md-12 text-right mt-1">
          <div class="float-right text-right">
            <vs-button color="primary" @click="academicanSearch" type="filled">Arama Yap</vs-button>
          </div>
        </div>
        <div v-if="foundedResearcher" class="researcher-profile-page-container">
          <div class="researcher-profile-page-header">
            <div class="white-box-with-light-shadow">
              <div class="gradient-bar"></div>
              <div class="researcher-card-container"><img class="researcher-card-photo"
                                                          :src="foundedResearcher.photo"
                                                          :alt="foundedResearcher.publishing_name">
                <div class="researcher-card-header">
                  <div class="researcher-card-names"><h2 class="margin-right-md margin-bottom-none"
                                                         :title="foundedResearcher.publishing_name">
                    {{ this.foundedResearcher.publishing_name }}</h2>
                    <div class="researcher-card-alt-names margin-top-xs"><span
                      class="researcher-card-alt-name">{{ this.foundedResearcher.publishing_name }}</span>
                      <vs-button>Detayları Yükle</vs-button>
                    </div>

                  </div>
                  <div class="researcher-card-header-researcher-id">
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Publons  ID</b>&nbsp;<a
                                                                                                                                      title="Publons academic uygulamasındaki ID değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br>
                      <span>{{this.foundedResearcher.ids.id}}</span>
                    </p>
                    <hr>
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Publons Researcher ID</b>&nbsp;<a
                                               title="Publons academic uygulamasındaki Researcher DI değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br><span>{{this.foundedResearcher.ids.rid}}</span>
                    </p>
                    <hr>
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Unique ID (truid)</b>&nbsp;<a
                                                                                                                                  title="Publons academic uygulamasındaki TRUID değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br><a class="very-dark-gray-link"

                                                                                      title="Copy and share this profile's URL"><span>{{this.foundedResearcher.ids.truid}}</span></a>
                    </p>

                  </div>


                </div>
                <div class="researcher-card-badges"></div>
                <div class="researcher-card-institution"></div>
                <div class="researcher-card-metrics left-bar-figures">
                  <div class="left-bar-figure" title="All publications, including those not indexed in Web of Science">
                    <h5>Publications</h5>
                    <p>-</p></div>
                  <div class="left-bar-figure" title="Total citations from the Web of Science Core Collection">
                    <div class="left-bar-figure-loading-indicator loadingStats" style="display: none;"></div>
                    <div class="left-bar-figure-loading loadingStats" style="display: none;"></div>
                    <h5>Total times cited</h5>
                    <p class="researcher-card-total-citations-val">-</p></div>
                  <div class="left-bar-figure left-bar-figure-large" title="Web of Science h-index">
                    <div class="left-bar-figure-loading-indicator loadingStats" style="display: none;"></div>
                    <div class="left-bar-figure-loading loadingStats" style="display: none;"></div>
                    <h5>H-index</h5>
                    <p class="researcher-card-h-index-val">-<a target="_blank"
                                                                href="https://publons.freshdesk.com/solution/articles/12000052051"
                                                                class="left-bar-figure-help-icon"
                                                                title="Click for details on how this is calculated and guidance on how to use the h-index responsibly.">&nbsp;<i
                      class="material-icons material-icons-xs inline"></i></a></p></div>
                </div>
              </div>
            </div>
          </div>

          <div class="researcher-profile-page-content">
            <div class="researcher-profile-summary-container">
              <div class="researcher-profile-summary-researcher-summary white-box-with-light-shadow">
                <div class="researcher-profile-bio"><h3>Research Fields</h3>
                  <p class="researcher-profile-research-fields"><a href="/researcher/?research_field=11890"
                                                                   class="button small autowidth">counseling</a><a
                    href="/researcher/?research_field=14481" class="button small autowidth">Educational
                    Measurement</a><a href="/researcher/?research_field=390" class="button small autowidth">Educational
                    Psychology</a><a href="/researcher/?research_field=71492" class="button small autowidth">Education
                    &amp; Educational Research</a><a href="/researcher/?research_field=577908"
                                                     class="button small autowidth">gifted and talented</a><a
                    href="/researcher/?research_field=3604" class="button small autowidth">Gifted Education</a><a
                    href="/researcher/?research_field=1029" class="button small autowidth">Psychology</a></p>
                  <div class="researcher-profile-bio-expanded-content" style="display: none;"><h3>Identifiers</h3>
                    <ul>
                      <li><b>Web of Science ResearcherID</b><a
                        title="The Web of Science ResearcherID links a researcher's publications across all Web of Science Group products, including Web of Science, Publons, and InCites. A researcher can link their publications across all these products by adding them to their Publons profile."><i
                        class="material-icons material-icons-xs inline"></i></a>&nbsp;<a class="very-dark-gray-link"
                                                                                          href="/researcher/E-5832-2014/"
                                                                                          title="Copy and share this profile's URL"><span>E-5832-2014</span></a>
                      </li>
                      <li><b>ORCiD</b>&nbsp;<img class="orcid-icon" src="/static/images/icons/orcid.png"><a
                        href="https://orcid.org/0000-0003-1874-9004" target="_blank">https://orcid.org/0000-0003-1874-9004</a>
                      </li>
                    </ul>
                    <h3>Institutions</h3>
                    <ul>
                      <li><a class="very-dark-gray-link" href="/institution/279640/" target="_blank"
                             title="Hacettepe University Faculty of Education"><span>Hacettepe University Faculty of Education until present</span></a>
                      </li>
                      <li><a class="very-dark-gray-link" href="/institution/1111416/" target="_blank"
                             title="Gaziosmanpaşa Üniversitesi Eğitim Fakültesi"><span>Gaziosmanpaşa Üniversitesi Eğitim Fakültesi from 2010 until 2013</span></a>
                      </li>
                      <li><a class="very-dark-gray-link" href="/institution/920896/" target="_blank"
                             title="Winston Salem State University"><span>Winston Salem State University from 2008 until 2010</span></a>
                      </li>
                      <li><a class="very-dark-gray-link" href="/institution/62378/" target="_blank"
                             title="Washington State University (WSU), Pullman"><span>Washington State University (WSU), Pullman from 2007 until 2008</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="researcher-profile-expand-button collapse-bar"><p class="collapse-bar-full"
                                                                              style="display: none;">- Hide institutions
                  &amp; awards</p>
                  <p class="collapse-bar-collapsed">+ View all institutions &amp; awards</p></div>
              </div>
              <div class="researcher-profile-summary-publications white-box-with-light-shadow">
                <div class="paginated-list publication-list" style="display: block;">
                  <div class="publication-list-header">
                    <div class="publication-list-header-text"><h3
                      class="publication-list-header-text-title margin-none">Most cited publications</h3>
                      <p class="publication-list-header-text-publications-count" style="display: none;">42
                        publications</p></div>
                    <div class="publication-list-header-sort-by" style="display: none;"><p
                      class="publication-list-header-sort-by-label help-text margin-none">Sort by</p>
                      <div
                        class="publication-list-header-sort-by-dropdown margin-none form-component dropdown-field form-component-short-no-label">
                        <div class="textfield right-control float-label"><input type="text" class="" value="Most cited"
                                                                                readonly=""><input id="" name=""
                                                                                                   type="hidden"
                                                                                                   value="citations"><label
                          for=""></label><span class="placeholder"></span>
                          <div class="dropdown-arrow" tabindex="">
                            <div></div>
                          </div>
                          <div class="dropdown-box"><input class="focus-helper" type="text">
                            <div class="dropdown-box-content">
                              <div><p data-value="citations" class="dropdown-content-text ">Most cited</p></div>
                              <div><p data-value="date-published" class="dropdown-content-text ">Most recent</p></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="paginated-list-items-header publication-list-items-header">
                    <div class="paginated-list-paginator light-theme simple-pagination" style="display: none;">
                      <ul>
                        <li class="disabled"><span class="current prev">&lt;</span></li>
                        <li class="active"><span class="current">1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li class="disabled"><span class="ellipse">…</span></li>
                        <li><span>8</span></li>
                        <li><span>9</span></li>
                        <li><span class="next">&gt;</span></li>
                      </ul>
                    </div>
                    <h5 class="publication-list-items-citations-header"
                        title="Number of citations from the Web of Science Core Collection">Times cited</h5></div>
                  <ul class="paginated-list-items publication-list-items">
                    <div>
                      <div class="paginated-list-item publication-list-item">
                        <div class="publication-list-item-details">
                          <div class="publication-list-item-title-publication margin-bottom-sm"><a
                            class="publication-list-item-title very-dark-gray-link" href="/publon/13919185/"
                            title="A multivariate investigation of the differences in mathematics anxiety"><span>A multivariate investigation of the differences in mathematics anxiety</span></a>
                            <div class="inline wos-ribbon-margin-right">
                              <div class="publication-list-item-wos-ribbon"><a
                                href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000237166700001&amp;DestLinkType=FullRecord&amp;DestApp=WOS_CPL"
                                target="_blank" class="publication-list-item-wos-ribbon-link"
                                title="Click to view this record in the Web of Science Core Collection">Web of
                                Science</a></div>
                            </div>
                          </div>
                          <div class="small publication-list-item-journal">
                            <div class="publication-list-item-cached-journal">
                              <div class="publication-list-item-journal-inline-image"><a
                                href="/journal/3414/personality-and-individual-differences/"
                                title="Personality and Individual Differences (Elsevier)"><img
                                src="https://publons.com/media/thumbs/publishers/logos/267ded92-ab8f-4402-b7dd-040004ae27c0.png.30x30_q95_detail_letterbox_upscale.png"></a>
                              </div>
                              <div class="publication-list-item-journal-copy"><p
                                class="publication-list-item-journal-published-copy">Published:<span
                                class="publication-list-item-date">May 2006</span>&nbsp;in&nbsp;<a
                                class="publication-list-item-journal-title very-dark-gray-link"
                                href="/journal/3414/personality-and-individual-differences/"
                                title="Personality and Individual Differences (Elsevier)"><span>Personality and Individual Differences</span></a>
                              </p>
                                <p class="publication-list-item-journal-published-copy">DOI:&nbsp;<a
                                  class="very-dark-gray-link" href="https://doi.org/10.1016/J.PAID.2005.10.009"
                                  title="10.1016/J.PAID.2005.10.009"><span>10.1016/J.PAID.2005.10.009</span></a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="publication-list-item-citations"><a
                          href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000237166700001&amp;DestLinkType=CitingArticles&amp;DestApp=WOS_CPL"
                          title="Click to view citing articles in the Web of Science Core Collection" target="_blank">79
                          <div class="publication-list-item-citations-hint">Citations</div>
                        </a></div>
                      </div>
                    </div>
                    <div>
                      <div class="paginated-list-item publication-list-item">
                        <div class="publication-list-item-details">
                          <div class="publication-list-item-title-publication margin-bottom-sm"><a
                            class="publication-list-item-title very-dark-gray-link" href="/publon/13919192/"
                            title="Individual differences in statistics anxiety among college students"><span>Individual differences in statistics anxiety among college students</span></a>
                            <div class="inline wos-ribbon-margin-right">
                              <div class="publication-list-item-wos-ribbon"><a
                                href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000181794500010&amp;DestLinkType=FullRecord&amp;DestApp=WOS_CPL"
                                target="_blank" class="publication-list-item-wos-ribbon-link"
                                title="Click to view this record in the Web of Science Core Collection">Web of
                                Science</a></div>
                            </div>
                          </div>
                          <div class="small publication-list-item-journal">
                            <div class="publication-list-item-cached-journal">
                              <div class="publication-list-item-journal-inline-image"><a
                                href="/journal/3414/personality-and-individual-differences/"
                                title="Personality and Individual Differences (Elsevier)"><img
                                src="https://publons.com/media/thumbs/publishers/logos/267ded92-ab8f-4402-b7dd-040004ae27c0.png.30x30_q95_detail_letterbox_upscale.png"></a>
                              </div>
                              <div class="publication-list-item-journal-copy"><p
                                class="publication-list-item-journal-published-copy">Published:<span
                                class="publication-list-item-date">Apr 2003</span>&nbsp;in&nbsp;<a
                                class="publication-list-item-journal-title very-dark-gray-link"
                                href="/journal/3414/personality-and-individual-differences/"
                                title="Personality and Individual Differences (Elsevier)"><span>Personality and Individual Differences</span></a>
                              </p>
                                <p class="publication-list-item-journal-published-copy">DOI:&nbsp;<a
                                  class="very-dark-gray-link" href="https://doi.org/10.1016/S0191-8869(02)00076-4"
                                  title="10.1016/S0191-8869(02)00076-4"><span>10.1016/S0191-8869(02)00076-4</span></a>
                                </p></div>
                            </div>
                          </div>
                        </div>
                        <div class="publication-list-item-citations"><a
                          href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000181794500010&amp;DestLinkType=CitingArticles&amp;DestApp=WOS_CPL"
                          title="Click to view citing articles in the Web of Science Core Collection" target="_blank">68
                          <div class="publication-list-item-citations-hint">Citations</div>
                        </a></div>
                      </div>
                    </div>
                    <div>
                      <div class="paginated-list-item publication-list-item">
                        <div class="publication-list-item-details">
                          <div class="publication-list-item-title-publication margin-bottom-sm"><a
                            class="publication-list-item-title very-dark-gray-link" href="/publon/31900603/"
                            title="The development and initial tests for the psychometric properties of the COVID-19 Phobia Scale (C19P-S)"><span>The development and initial tests for the psychometric properties of the COVID-19 Phobia Scale (C19P-S)</span></a>
                            <div class="inline wos-ribbon-margin-right">
                              <div class="publication-list-item-wos-ribbon"><a
                                href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000541865900018&amp;DestLinkType=FullRecord&amp;DestApp=WOS_CPL"
                                target="_blank" class="publication-list-item-wos-ribbon-link"
                                title="Click to view this record in the Web of Science Core Collection">Web of
                                Science</a></div>
                            </div>
                          </div>
                          <div class="small publication-list-item-journal">
                            <div class="publication-list-item-cached-journal">
                              <div class="publication-list-item-journal-inline-image"><a
                                href="/journal/3414/personality-and-individual-differences/"
                                title="Personality and Individual Differences (Elsevier)"><img
                                src="https://publons.com/media/thumbs/publishers/logos/267ded92-ab8f-4402-b7dd-040004ae27c0.png.30x30_q95_detail_letterbox_upscale.png"></a>
                              </div>
                              <div class="publication-list-item-journal-copy"><p
                                class="publication-list-item-journal-published-copy">Authors: &nbsp;<span
                                class="very-dark-gray-text">Arpaci, Ibrahim</span>;&nbsp;<span
                                class="very-dark-gray-text">Karatas, Kasim</span>;&nbsp;<span
                                class="very-dark-gray-text">Baloglu, Mustafa</span>&nbsp;</p>
                                <p class="publication-list-item-journal-published-copy">Published:<span
                                  class="publication-list-item-date">Oct 2020</span>&nbsp;in&nbsp;<a
                                  class="publication-list-item-journal-title very-dark-gray-link"
                                  href="/journal/3414/personality-and-individual-differences/"
                                  title="Personality and Individual Differences (Elsevier)"><span>Personality and Individual Differences</span></a>
                                </p>
                                <p class="publication-list-item-journal-published-copy">DOI:&nbsp;<a
                                  class="very-dark-gray-link" href="https://doi.org/10.1016/J.PAID.2020.110108"
                                  title="10.1016/J.PAID.2020.110108"><span>10.1016/J.PAID.2020.110108</span></a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="publication-list-item-citations"><a
                          href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000541865900018&amp;DestLinkType=CitingArticles&amp;DestApp=WOS_CPL"
                          title="Click to view citing articles in the Web of Science Core Collection" target="_blank">43
                          <div class="publication-list-item-citations-hint">Citations</div>
                        </a></div>
                      </div>
                    </div>
                    <div>
                      <div class="paginated-list-item publication-list-item">
                        <div class="publication-list-item-details">
                          <div class="publication-list-item-title-publication margin-bottom-sm"><a
                            class="publication-list-item-title very-dark-gray-link" href="/publon/14452830/"
                            title="The impact of cultural collectivism on knowledge sharing among information technology majoring undergraduates"><span>The impact of cultural collectivism on knowledge sharing among information technology majoring undergraduates</span></a>
                            <div class="inline wos-ribbon-margin-right">
                              <div class="publication-list-item-wos-ribbon"><a
                                href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000369204400009&amp;DestLinkType=FullRecord&amp;DestApp=WOS_CPL"
                                target="_blank" class="publication-list-item-wos-ribbon-link"
                                title="Click to view this record in the Web of Science Core Collection">Web of
                                Science</a></div>
                            </div>
                          </div>
                          <div class="small publication-list-item-journal">
                            <div class="publication-list-item-cached-journal">
                              <div class="publication-list-item-journal-inline-image"><a
                                href="/journal/2070/computers-in-human-behavior/"
                                title="Computers in Human Behavior (Elsevier)"><img
                                src="https://publons.com/media/thumbs/publishers/logos/267ded92-ab8f-4402-b7dd-040004ae27c0.png.30x30_q95_detail_letterbox_upscale.png"></a>
                              </div>
                              <div class="publication-list-item-journal-copy"><p
                                class="publication-list-item-journal-published-copy">Authors: &nbsp;<span
                                class="very-dark-gray-text">Arpaci, Ibrahim</span>;&nbsp;<span
                                class="very-dark-gray-text">Baloglu, Mustafa</span>&nbsp;</p>
                                <p class="publication-list-item-journal-published-copy">Published:<span
                                  class="publication-list-item-date"> 2016</span>&nbsp;in&nbsp;<a
                                  class="publication-list-item-journal-title very-dark-gray-link"
                                  href="/journal/2070/computers-in-human-behavior/"
                                  title="Computers in Human Behavior (Elsevier)"><span>Computers in Human Behavior</span></a>
                                </p>
                                <p class="publication-list-item-journal-published-copy">DOI:&nbsp;<a
                                  class="very-dark-gray-link" href="https://doi.org/10.1016/J.CHB.2015.11.031"
                                  title="10.1016/J.CHB.2015.11.031"><span>10.1016/J.CHB.2015.11.031</span></a></p></div>
                            </div>
                          </div>
                        </div>
                        <div class="publication-list-item-citations"><a
                          href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000369204400009&amp;DestLinkType=CitingArticles&amp;DestApp=WOS_CPL"
                          title="Click to view citing articles in the Web of Science Core Collection" target="_blank">40
                          <div class="publication-list-item-citations-hint">Citations</div>
                        </a></div>
                      </div>
                    </div>
                    <div>
                      <div class="paginated-list-item publication-list-item">
                        <div class="publication-list-item-details">
                          <div class="publication-list-item-title-publication margin-bottom-sm"><a
                            class="publication-list-item-title very-dark-gray-link" href="/publon/13919191/"
                            title="MENTAL HEALTH OF TRAUMA-EXPOSED FIREFIGHTERS AND CRITICAL INCIDENT STRESS DEBRIEFING"><span>MENTAL HEALTH OF TRAUMA-EXPOSED FIREFIGHTERS AND CRITICAL INCIDENT STRESS DEBRIEFING</span></a>
                            <div class="inline wos-ribbon-margin-right">
                              <div class="publication-list-item-wos-ribbon"><a
                                href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000176177800004&amp;DestLinkType=FullRecord&amp;DestApp=WOS_CPL"
                                target="_blank" class="publication-list-item-wos-ribbon-link"
                                title="Click to view this record in the Web of Science Core Collection">Web of
                                Science</a></div>
                            </div>
                          </div>
                          <div class="small publication-list-item-journal">
                            <div class="publication-list-item-cached-journal">
                              <div class="publication-list-item-journal-inline-image"><a
                                href="/journal/9748/journal-of-loss-and-trauma/"
                                title="Journal of Loss and Trauma (Routledge)"><img
                                src="https://publons.com/media/thumbs/publishers/logos/9974a85622c140acaea9557d23c2703c.png.30x30_q95_detail_letterbox_upscale.png"></a>
                              </div>
                              <div class="publication-list-item-journal-copy"><p
                                class="publication-list-item-journal-published-copy">Published:<span
                                class="publication-list-item-date">Jan 2011</span>&nbsp;in&nbsp;<a
                                class="publication-list-item-journal-title very-dark-gray-link"
                                href="/journal/9748/journal-of-loss-and-trauma/"
                                title="Journal of Loss and Trauma (Routledge)"><span>Journal of Loss and Trauma</span></a>
                              </p>
                                <p class="publication-list-item-journal-published-copy">DOI:&nbsp;<a
                                  class="very-dark-gray-link" href="https://doi.org/10.1080/10811440290057639"
                                  title="10.1080/10811440290057639"><span>10.1080/10811440290057639</span></a></p></div>
                            </div>
                          </div>
                        </div>
                        <div class="publication-list-item-citations"><a
                          href="https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=Publons&amp;SrcAuth=Publons_CEL&amp;KeyUT=WOS:000176177800004&amp;DestLinkType=CitingArticles&amp;DestApp=WOS_CPL"
                          title="Click to view citing articles in the Web of Science Core Collection" target="_blank">37
                          <div class="publication-list-item-citations-hint">Citations</div>
                        </a></div>
                      </div>
                    </div>
                  </ul>
                  <div class="paginated-list-items-footer publication-list-items-footer"><a
                    href="/researcher/1511864/baloglu/publications/" name="navigate-to-publications"
                    class="researcher-profile-page-backbone-link button autowidth">Go to publications</a>
                    <div class="paginated-list-paginator light-theme simple-pagination" style="display: none;">
                      <ul>
                        <li class="disabled"><span class="current prev">&lt;</span></li>
                        <li class="active"><span class="current">1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li class="disabled"><span class="ellipse">…</span></li>
                        <li><span>8</span></li>
                        <li><span>9</span></li>
                        <li><span class="next">&gt;</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="loading" style="display: none;"><span class="announcement-loading-gif center"></span></div>
                <div class="error" style="display: none;"><i class="material-icons">error_outline</i>&nbsp;Sorry,
                  something went wrong and we could not load this widget.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id="loading" class="hidden">
        <h1>Searching...</h1>
        <div class="searchbar-searching">
          <div class="large-loading-gif margin-top-lg"></div>
          <span class="sr-only">Loading...</span></div>
      </div>
    </div>

  </div>
</template>

<script>
import "@/assets/app-52e167.css";
import "@/assets/lib-52e167.css";

import verifyService from "../../services/verify/verify.service";
import saxNotifications from "../../plugins/saxNotifications";
import saxLoading from "../../plugins/saxLoading";
import searchService from "../../services/search/search.service";

const searchStillContinueMessage = "Arama işlemi devam ediyor lütfen bekleyiniz.";
const fieldCannotBeNull = "Akademisyen ID belirtmeden arama işlemi yapamazsınız.";
export default {
  name: "index",
  layout: "pubLayout",
  beforeMount() {
    verifyService.verifyInPage();
  },

  mounted() {


  },
  data() {
    return {
      academicanId: ""

      , foundedResearcher:false
    }
  },
  methods: {
    academicanSearch() {
      if (!this.academicanId)
        saxNotifications.error(fieldCannotBeNull);
      else
        searchService.searchWID(this.academicanId).then((resp) => {
          console.log("your resp");
          console.log(resp);
          if (!resp.isCompletedSuccessfully) {
            saxNotifications.error(`${this.academicanId} ID li araştırmacı publons üzerinde bulunamadı , lütfen kontrol edip tekrar deneyiniz.`)
          } else {
            this.foundedResearcher = resp.result;
            saxNotifications.success(`${this.academicanId} ID li araştırmacı bilgileri başarı ile getirildi.`);
          }
        })
    }
  }
}
</script>
<style>
.vs-input {
  width: 100% !important;
}
</style>


