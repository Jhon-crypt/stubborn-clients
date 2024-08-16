"use client"
import Hero from "./components/hero/hero";
import Navs from "./components/navs/nav";
import TagCards from "./components/cards/tagsCard";
import { useEffect, useState } from 'react'
import supabase from "./utils/supabase";

export default function Home() {

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTags();
    TagListener();
  }, []);

  async function fetchTags() {
    try {

      setLoading(true)

      const { data } = await supabase
        .from('tags')
        .select('*')
        .order('id', { ascending: false })
      if (data) {
        setLoading(false)
        setTags(data)
        console.log(data)

      } else {
        setLoading(false)
        console.log("Nothing here")
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  async function TagListener() {
    const tagListener = supabase
      .channel('any')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tags' }, payload => {
        const newTag = payload.new;
        setTags((oldTag) => {
          // Add the newly inserted project to the list of projects and sort them by ID.
          const newTags = [...oldTag, newTag];
          newTags.sort((a, b) => b.id - a.id);
          return newTags;
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(tagListener); // Cleanup: remove the listener when the component is unmounted.
    };
  }

  return (
    <>
      <main style={{ height: "100vh", alignContent: "center" }}>
        <Hero />
      </main>

      <main style={{ height: "100vh", alignContent: "start" }}>
        <div className="container mt-3" id="complain">

          <Navs />

          {loading ? (
            <>
              <div class="d-flex align-content-center justify-content-center">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                {tags.map((tags) => (
                  <div className="col mb-3">
                    <TagCards tag_id={tags.tag_id} creator={tags.creator} client={tags.client} complain={tags.complain} proofs={tags.images}/>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </main>
    </>
  );
}
